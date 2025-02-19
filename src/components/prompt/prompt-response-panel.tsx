

interface PromptResponsePanelProps {
  width: number;
}

export default function PromptResponsePanel({ width }: PromptResponsePanelProps) {
  return (
    <div  className="h-full p-4 bg-gray-50">
      <div className="text-sm font-medium mb-2">Generated Response</div>
      <div className="text-gray-500 text-sm">
        Click Run to generate a response
      </div>
    </div>
  );
}
