
import formatDate from "@/utils/date-format";
import { AssistantMessage, Chat } from "@/types/assistant";
import SidePanel from "@/components/side-panel/side-panel";

interface ChatDetailsProps {
    messages: AssistantMessage[];
}

export default function ChatDetails({ messages }: ChatDetailsProps) {
    return (
        <div className="flex flex-col p-4 mb-2 ">
            {
                messages.map((message, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <p className="text-sm text-default-500">
                            {message.isUser ? 'User' : 'Assistant'}: {message.content}
                        </p>
                        <p>time: {formatDate(message.timestamp)}</p>
                        <p>files: {message.files?.length ? message.files.join(', ') : ''}</p>
                        <p>content: {message.content}</p>
                    </div>
                ))
            }
        </div>
    )
}