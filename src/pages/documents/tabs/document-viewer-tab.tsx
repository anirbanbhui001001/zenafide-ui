import React from "react";
import { Document } from "@/types/document";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

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

interface DocumentViewerTabProps {
  document: Document | null;
}

export default function DocumentViewerTab({
  document,
}: DocumentViewerTabProps) {
  if (!document) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Document Viewer</h2>
        <p className="text-gray-500">Select a document to view its contents</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Viewing: {document.filename}</h2>
      <div className="border rounded-lg">
        <EditorProvider
          extensions={extensions}
          content={`
            <h3>my contents</h3>
            <br />
            <br />
            
          `}
        />
      </div>
    </div>
  );
}
