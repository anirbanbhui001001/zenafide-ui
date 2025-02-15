
import { Experiment } from "@/types/experiment";
import { ExperimentResult, Metric, ScoreMetric } from "@/types/experiment-details";

export const experiments: Experiment[] = [
  {
    id: "1",
    name: "Experiment 1",
    creator: "Srikanth",
    updated: "1h ago",
  },
  {
    id: "2",
    name: "Experiment 2",
    duration: "1.5s",
    llmDuration: "2s",
    promptTokens: 12232,
    creator: "Srikanth",
    updated: "1h ago",
  },
];

export const experimentResults: ExperimentResult[] = [
  {
    id: "1",
    input: "What happens...",
    output: "When you star...",
    expected: "Starred docs ...",
    tags: "-",
    factuality: "0.00%",
    factualityParsed: "100.00%",
    avgRelevance: "80.00%",
    maxRelevance: "80.00%",
  },
  {
    id: "2",
    input: "How to...",
    output: "To create...",
    expected: "Create a...",
    tags: "documentation",
    factuality: "75.00%",
    factualityParsed: "100.00%",
    avgRelevance: "85.00%",
    maxRelevance: "90.00%",
  },
];

export const scoreMetrics: ScoreMetric[] = [
  { key: "factuality", label: "Factuality" },
  { key: "factualityParsed", label: "Factuality parsed" },
  { key: "avgRelevance", label: "avg_relevance" },
  { key: "maxRelevance", label: "max_relevance" },
];

export const experimentMetrics: Metric[] = [
  { label: "Factuality", value: "38.33%", subtext: "AVG" },
  { label: "Factuality parsed", value: "100.00%", subtext: "AVG" },
  { label: "avg_relevance", value: "79.17%", subtext: "AVG" },
  { label: "max_relevance", value: "80.00%", subtext: "AVG" },
];
