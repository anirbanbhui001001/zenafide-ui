import { Tab, Tabs } from "@heroui/react";
import DataSetsTab from './tabs/datasets-tab';
import MetricsTab from "./tabs/metrics-tab";
import ExperimentsTab from './tabs/experiments-tab';

export default function EvaluationsPage() {
  return (
    <div>
      <Tabs fullWidth>
        <Tab key="datasets" title="Datasets">
          <DataSetsTab />
        </Tab>
        <Tab key="metrics" title="Metrics">
          <MetricsTab />
        </Tab>
        <Tab key="experiments" title="Experiments">
          <ExperimentsTab />
        </Tab>
      </Tabs>
    </div>
  )
}
