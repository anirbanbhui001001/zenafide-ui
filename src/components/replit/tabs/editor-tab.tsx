
import React from "react";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";

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

interface EditorTabProps {
  content: string;
  readOnly?: boolean;
}

export default function EditorTab({
  content,
  readOnly = false
}: EditorTabProps) {
  if (!content) {
    return (
      <div className="p-4">
        <p className="text-gray-500">No content to display</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="border rounded-lg">
        <EditorProvider
          extensions={extensions}
          content={content}
          editable={!readOnly}
        />
      </div>
    </div>
  );
}
