import { Card, CardBody, CardHeader, ScrollShadow } from '@heroui/react';

interface Metric {
  title: string;
  description: string;
  name: string;
}

export default function MetricsTab() {
  const metrics: Metric[] = [
    {
      title: 'JSON Diff (Case, order, path)',
      description:
        'Calculates the percentage difference between two JSON objects by comparing their structure and content. The primary goal is to compute a similarity score between the objects.',
      name: 'json-diff-case-order-path-ztwdcl-ltgria',
    },
    {
      title: 'Max Character Length',
      description:
        "Respond with score of 1 if the text's length is over a max number of characters.",
      name: 'max-character-length-zqovcc',
    },
    // {
    //   title: 'Test Vellum Metric',
    //   description: 'A metric to only be used for testing purposes.',
    //   name: 'test-metric-0',
    // },
    {
      title: 'Uptrain - Guideline Adherence',
      description:
        'Measures how well the LLM adheres to a provided guideline, rule, or protocol when giving a response. The values are 1.0 if it follows the guideline and 0.0 if not.',
      name: 'uptrain-guideline-adherence',
    },
    {
      title: 'Uptrain - Tonality',
      description:
        'Tonality evaluates the response in terms of its tone in comparison with the provided LLM persona. The values fall into three buckets (0, 0.5, 1) - with higher values indicating better adherence.',
      name: 'uptrain-tonality',
    },
    {
      title: 'Uptrain - Jailbreak Detection',
      description:
        'Jailbreak detection is a security metric that checks if the user prompts to generate a potentially harmful or illegal response. The values range from (0.0, 1.0) with a score of 1.0 indicating potential security risks.',
      name: 'uptrain-jailbreak-detection',
    },
    {
      title: 'Word Count Adherence',
      description:
        'Measures whether the response word count falls within the specified limit. Returns 1.0 if the number of words in the response string are less than the provided maximum, 0.0 otherwise.',
      name: 'word-count-adherence',
    },
    {
      title: 'Ragas - Faithfulness',
      description:
        'Faithfulness measures the factual consistency of the generated answer against the given context. It is calculated from answer and retrieved context. The answer is scaled to a range of 0-1.',
      name: 'ragas-faithfulness',
    },
    {
      title: 'Ragas - Context Relevancy',
      description:
        'This metric gauges the relevancy of the retrieved context, calculated based on both the question and contexts. The values fall within the range of (0, 1), with higher values indicating better relevancy.',
      name: 'ragas-context-relevancy',
    },
    {
      title: 'Ragas - Answer Relevance',
      description:
        'The evaluation metric, Answer Relevancy, focuses on assessing how pertinent the generated answer is to the given prompt. A lower score is assigned to answers that are off-topic.',
      name: 'ragas-answer-relevance',
    },
    {
      title: 'Regex Match',
      description:
        'Check if any part of the output matches the supplied regex.',
      name: 'regex-match',
    },
    {
      title: 'Semantic Similarity',
      description:
        'Use a specialized model to compute semantic similarity between the output and the target. Using cross-encoder/stb-roberta-large as the model.',
      name: 'semantic-similarity-cross-encoder-stsb-roberta-large',
    },
    {
      title: 'Exact Match',
      description:
        'Check for an exact match between the output and the target.',
      name: 'exact-match',
    },
    {
      title: 'JSON Validity',
      description: 'Check for whether the output is valid JSON.',
      name: 'json-validity',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div className="px-4 mt-3">
        <h2 className="text-lg font-semibold">All Metric Definitions</h2>
        <p className="text-gray-600 text-sm">
          Metrics are defined to evaluate a Workflow/Prompt's effectiveness
        </p>
      </div>

      {/* Metrics Grid with ScrollShadow */}
      <ScrollShadow className="w-full max-h-[70vh] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {metrics.map((metric) => (
            <Card key={metric.name} className="w-full border-1" shadow="none">
              <CardHeader className="flex justify-between items-center px-4 py-3">
                <h3 className="text-medium font-medium">{metric.title}</h3>
                <button className="text-gray-500">...</button>
              </CardHeader>
              <CardBody className="px-4 py-3">
                <p className="text-sm text-gray-600 mb-4">
                  {metric.description}
                </p>
                <p className="text-xs text-gray-500">Name: {metric.name}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
}
