
export interface ExperimentResult {
  id: string;
  input: string;
  output: string;
  expected: string;
  tags: string;
  factuality: string;
  factualityParsed: string;
  avgRelevance: string;
  maxRelevance: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface ScoreMetric {
  key: string;
  label: string;
}
