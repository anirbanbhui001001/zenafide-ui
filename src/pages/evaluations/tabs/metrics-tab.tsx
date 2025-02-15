import { Card, CardBody, CardHeader, ScrollShadow } from "@heroui/react";
import { metrics } from "@/data/dummy";

export default function MetricsTab() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div className="px-4 mt-3">
        <h2 className="text-lg font-medium">All Metric Definitions</h2>
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
