
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import DocumentsTab from './tabs/documents-tab';
import DocumentViewerTab from './tabs/document-viewer-tab';
import ParsedSnapshotsTab from './tabs/parsed-snapshots-tab';
import IndexedSnapshotsTab from './tabs/indexed-snapshots-tab';
import { Document } from "@/types/documents/document";

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
    setActiveTab("viewer");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Documents</h1>
      <Tabs 
        selectedKey={activeTab} 
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Document management options"
      >
        <Tab key="documents" title="Documents">
          <DocumentsTab onDocumentSelect={handleDocumentSelect} />
        </Tab>
        <Tab key="viewer" title="Viewer">
          <DocumentViewerTab document={selectedDocument} />
        </Tab>
        <Tab key="parsed" title="Parsed Snapshots">
          <ParsedSnapshotsTab onDocumentSelect={handleDocumentSelect} />
        </Tab>
        <Tab key="indexed" title="Indexed Snapshots">
          <IndexedSnapshotsTab />
        </Tab>
      </Tabs>
    </div>
  );
}
