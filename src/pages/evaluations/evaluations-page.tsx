import { Tab, Tabs } from "@heroui/react";
// import DataSetsTab from './tabs/data-sets-tab';
import MetricsTab from "./tabs/metrics-tab";
import ExperimentsTab from './tabs/experiments-tab';

export default function EvaluationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Evaluations</h1>
      <Tabs aria-label="Evaluation options">
        {/* <Tab key="datasets" title="Data Sets">
          <DataSetsTab />
        </Tab> */}
        <Tab key="metrics" title="Scorers">
          <MetricsTab />
        </Tab>
        <Tab key="experiments" title="Experiments">
          <ExperimentsTab />
        </Tab>
      </Tabs>
    </div>
  );
}
