
import { Tab, Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import InsightsTab from './tabs/insights-tab';
import DocumentViewerTab from '../documents/tabs/document-viewer-tab';
import { Insight } from "@/types/core/insights";
import { Document } from "@/types/documents/document";

function castInsightToDocument(insight: Insight | null): Document | null {
  if (!insight) return null;
  return {
    id: insight.id,
    filename: insight.name,
    folder: insight.folder || "",
    uploadedDate: new Date().toISOString(),
    uploadedBy: "system",
    status: "active",
    content: insight.content
  };
}

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(castInsightToDocument(selectedInsight));
  }, [selectedInsight]);

  return (
    <div>
      <Tabs fullWidth>
        <Tab key="insights" title="Insights">
          <InsightsTab selectedInsight={selectedInsight} onInsightSelect={(insight: Insight) => {
            setSelectedInsight(insight);
          }} />
        </Tab>
        <Tab key="documents" title="Documents">
          <DocumentViewerTab document={document} />
        </Tab>
      </Tabs>
    </div>
  )
}
