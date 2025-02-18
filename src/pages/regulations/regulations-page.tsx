import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import DocumentsTab from "./tabs/documents-tab";
import AssistantTab from "./tabs/assistant-tab";
import ReplitLayout from "@/components/replit/replit-layout";
import { Regulation } from "@/types/regulations";

export default function RegulationsPage() {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedRegulation, setSelectedRegulation] =
    useState<Regulation | null>(null);

  const handleRegulationSelect = (regulation: Regulation) => {
    setSelectedRegulation(regulation);
    setActiveTab("analysis");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Regulations</h1>
      <Tabs
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Regulation management options"
      >
        <Tab key="documents" title="Documents">
          <DocumentsTab onRegulationSelect={handleRegulationSelect} />
        </Tab>
        {/* <Tab key="analysis" title="Analysis">
          <AnalysisTab regulation={selectedRegulation} />
        </Tab>
        <Tab key="assistant" title="Assistant">
          <AssistantTab />
        </Tab> */}
        <Tab key="replit" title="Reva">
          <div className="h-[calc(100vh-10rem)]">
            <ReplitLayout initialPanels={initialPanels} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
