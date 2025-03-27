import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, ScrollShadow, Alert } from "@heroui/react";
// import { metrics } from "@/data/evals/metrics";
import { Metric } from "@/types/evals/metric";
import LoadingOverlay from "@/components/loading";
import { supabase } from "@/utils/superbase";

export default function MetricsTab() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMetrics = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from('metrics')
      .select('*')
      .order('createdAt', { ascending: true });

    if (error) setError(error.message);
    setMetrics(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getMetrics();
  }, []);

  return (
    <div>
      {error &&
        <div className="w-full flex items-center my-3 p-4">
          <Alert
            color="danger"
            title={`Error: ${error}`}
            onClose={() => setError(null)}
          />
        </div>
      }
      <LoadingOverlay loading={loading} />
      <ScrollShadow className="h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
          {metrics.map((metric) => (
            <Card key={metric.name} className="flex flex-col gap-4">
              <CardHeader className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{metric.title}</h2>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <p className="text-sm text-default-500">{metric.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </ScrollShadow>
    </div>
  )
}
