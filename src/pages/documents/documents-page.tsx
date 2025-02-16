
import { Tab, Tabs } from "@heroui/react";
import DocumentsTab from './tabs/documents-tab';
import DocumentViewerTab from './tabs/document-viewer-tab';
import ParsedSnapshotsTab from './tabs/parsed-snapshots-tab';
import IndexedSnapshotsTab from './tabs/indexed-snapshots-tab';

export default function DocumentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Documents</h1>
      <Tabs aria-label="Document management options">
        <Tab key="documents" title="Documents">
          <DocumentsTab />
        </Tab>
        <Tab key="viewer" title="Viewer">
          <DocumentViewerTab />
        </Tab>
        <Tab key="parsed" title="Parsed Snapshots">
          <ParsedSnapshotsTab />
        </Tab>
        <Tab key="indexed" title="Indexed Snapshots">
          <IndexedSnapshotsTab />
        </Tab>
      </Tabs>
    </div>
  );
}
