
export interface Experiment {
  id: string;
  name: string;
  errors?: string;
  duration?: string;
  llmDuration?: string;
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
  creator: string;
  updated: string;
  examples?: string;
  source?: string;
}
