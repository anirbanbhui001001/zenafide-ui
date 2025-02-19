import { Button, Card } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AssistantMessage, FileChange } from "@/types/assistant";

interface AssistantChatMessageProps {
  message: AssistantMessage;
  onFileSelect?: (file: FileChange) => void;
  onReviewChangesClick?: () => void;
}

const getTimeAgo = (timestamp: string) => {
  const minutes = Math.floor(
    (Date.now() - new Date(timestamp).getTime()) / 60000,
  );
  return `${minutes} minutes ago`;
};

export default function AssistantChatMessage({
  message,
  onReviewChangesClick,
}: AssistantChatMessageProps) {
  return (
    <div className={`flex flex-col gap-4 ${message.isUser ? "items-end" : ""}`}>
      <div
        className={`flex flex-col gap-2 p-4 rounded-lg ${message.isUser ? "bg-default-100" : ""}`}
      >
        <div
          className={`flex items-center gap-2 text-sm text-default-500 ${message.isUser ? "justify-end" : "justify-start"}`}
        >
          {!message.isUser && (
            <>
              <Icon icon="mdi:robot" className="text-base" />
              <span className="text-sm">Assistant</span>
              <span className="text-sm">{getTimeAgo(message.timestamp)}</span>
              {message.files && (
                <>
                  <Icon icon="mdi:file-multiple" className="text-base" />
                  <span className="text-sm">
                    Read {message.files.length} files
                  </span>
                </>
              )}
            </>
          )}
          {message.isUser && <Icon icon="mdi:account" className="text-lg" />}
        </div>
        <div className="prose dark:prose-invert max-w-none text-sm">
          {message.content}
        </div>
      </div>
      {message.proposedChanges && (
        <div className="space-y-2 mt-2">
          {message.proposedChanges.map((change: FileChange) => (
            <Card key={change.filePath} className="p-2 bg-default-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:file-code" className="text-sm" />
                  <span className="text-sm">{change.filePath}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success text-sm">
                    +{change.additions}
                  </span>
                  <span className="text-danger text-sm">
                    -{change.deletions}
                  </span>
                </div>
              </div>
            </Card>
          ))}
          <div className="flex gap-2">
            <Button
              color="secondary"
              size="sm"
              onPress={() => {
                if (message.proposedChanges) {
                  message.proposedChanges.forEach((change) => {
                    const newTab = {
                      id: `file-${change.filePath}-${Date.now()}`,
                      title: change.description,
                      content: (
                        <pre className="p-4 whitespace-pre-wrap">
                          {change.content}
                        </pre>
                      ),
                      isCloseable: true,
                    };

                    const event = new CustomEvent("openNewTab", {
                      detail: {
                        panelId: "right-panel",
                        tab: newTab,
                      },
                    });
                    window.dispatchEvent(event);
                  });
                }
              }}
            >
              Review Changes
            </Button>
            <Button color="primary" size="sm">
              Apply Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
