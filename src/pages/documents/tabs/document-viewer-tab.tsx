
import React from "react";
import { Document } from "@/types/document";

interface DocumentViewerTabProps {
  document: Document | null;
}

export default function DocumentViewerTab({ document }: DocumentViewerTabProps) {
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
      <div className="border rounded p-4">
        {/* Document content will be rendered here */}
        <p>Document content preview for {document.filename}</p>
      </div>
    </div>
  );
}
