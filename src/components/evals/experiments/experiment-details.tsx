
import { Experiment } from "@/types/evals/experiment";

interface ExperimentDetailsProps {
  experiments: Experiment;
}

export default function ExperimentDetails({
  experiments,
}: ExperimentDetailsProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xl font-bold">Experiment Details</h1>
      <p className="text-sm text-default-500">Name: {experiments.name}</p>
      <p className="text-sm text-default-500">Creator: {experiments.creator}</p>
      <p className="text-sm text-default-500">Updated: {experiments.updated}</p>
      <p className="text-sm text-default-500">Duration: {experiments.duration}</p>
      <p className="text-sm text-default-500">LLM Duration: {experiments.llmDuration}</p>
      <p className="text-sm text-default-500">Prompt Tokens: {experiments.promptTokens}</p>
      <p className="text-sm text-default-500">Total Tokens: {experiments.totalTokens}</p>
      <p className="text-sm text-default-500">Errors: {experiments.errors}</p>
    </div>
  )
}
