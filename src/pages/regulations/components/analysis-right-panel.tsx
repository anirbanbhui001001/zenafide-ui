
import React from "react";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import { Regulation, RegulationAgent } from "@/types/regulation";
import { regulationAgents } from "@/data/regulations";

interface AnalysisRightPanelProps {
  regulation: Regulation | null;
  selectedAgentId: string | null;
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
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

export default function AnalysisRightPanel({
  regulation,
  selectedAgentId,
}: AnalysisRightPanelProps) {
  const selectedAgent = selectedAgentId
    ? regulationAgents.find((a) => a.id === selectedAgentId)
    : null;

  if (!regulation && !selectedAgent) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Select a regulation or agent to view content</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">
        {selectedAgent ? selectedAgent.name : regulation?.filename}
      </h2>
      <div className="border rounded-lg">
        <EditorProvider
          extensions={extensions}
          content={`
            <h3>Content goes here</h3>
            <br />
            <br />
          `}
        />
      </div>
    </div>
  );
}
