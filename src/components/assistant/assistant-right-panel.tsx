
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import { FileChange } from "@/types/assistant";

interface AssistantRightPanelProps {
  selectedFile: FileChange | null;
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

export default function AssistantRightPanel({
  selectedFile
}: AssistantRightPanelProps) {
  if (!selectedFile) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Select a file to view its changes</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{selectedFile.filePath}</h2>
      </div>
      <div className="border rounded-lg">
        <EditorProvider
          extensions={extensions}
          content={selectedFile.content || "No content available"}
        />
      </div>
    </div>
  );
}
