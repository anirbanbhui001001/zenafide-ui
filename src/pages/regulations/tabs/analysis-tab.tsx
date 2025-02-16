
import React, { useState } from "react";
import { Regulation } from "@/types/regulation";
import AnalysisLeftPanel from "../components/analysis-left-panel";
import AnalysisRightPanel from "../components/analysis-right-panel";

interface AnalysisTabProps {
  regulation: Regulation | null;
}

export default function AnalysisTab({ regulation }: AnalysisTabProps) {
  const [selectedRegulation, setSelectedRegulation] = useState<Regulation | null>(
    regulation
  );
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  return (
    <div className="flex h-[calc(100vh-200px)]">
      <div className="w-1/4 border-r">
        <AnalysisLeftPanel
          selectedRegulation={selectedRegulation}
          onSelectRegulation={(reg) => {
            setSelectedRegulation(reg);
            setSelectedAgentId(null);
          }}
          onSelectAgent={(agentId) => setSelectedAgentId(agentId)}
        />
      </div>
      <div className="flex-1">
        <AnalysisRightPanel
          regulation={selectedRegulation}
          selectedAgentId={selectedAgentId}
        />
      </div>
    </div>
  );
}
