
import React from "react";
import { regulations, regulationAgents } from "@/data/regulations";
import { Regulation } from "@/types/regulation";

interface AnalysisLeftPanelProps {
  selectedRegulation: Regulation | null;
  onSelectRegulation: (regulation: Regulation) => void;
  onSelectAgent: (agentId: string) => void;
}

export default function AnalysisLeftPanel({
  selectedRegulation,
  onSelectRegulation,
  onSelectAgent,
}: AnalysisLeftPanelProps) {
  const relatedRegulations = regulations.filter(
    (reg) => reg.folder === selectedRegulation?.folder
  );

  return (
    <div className="flex flex-col gap-6 p-4">
      <section>
        <h3 className="text-lg font-medium mb-4">Intake</h3>
        <div className="flex flex-col gap-2">
          {relatedRegulations.map((regulation) => (
            <button
              key={regulation.id}
              onClick={() => onSelectRegulation(regulation)}
              className={`text-left p-2 rounded ${
                selectedRegulation?.id === regulation.id
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {regulation.filename}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Analysis</h3>
        <div className="flex flex-col gap-2">
          {regulationAgents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => onSelectAgent(agent.id)}
              className="text-left p-2 rounded hover:bg-gray-100"
            >
              {agent.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
