
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import InsightsTab from './tabs/insights-tab';
import DocumentViewerTab from '../documents/tabs/document-viewer-tab';
import { Insight } from "@/types/core/insights";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState("insights");
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  const handleInsightSelect = (insight: Insight) => {
    setSelectedInsight(insight);
    setActiveTab("viewer");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Insights</h1>
      <Tabs 
        selectedKey={activeTab} 
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Insight management options"
      >
        <Tab key="insights" title="Insights">
          <InsightsTab onInsightSelect={handleInsightSelect} />
        </Tab>
        <Tab key="viewer" title="Viewer">
          <DocumentViewerTab document={selectedInsight} />
        </Tab>
      </Tabs>
    </div>
  );
}
