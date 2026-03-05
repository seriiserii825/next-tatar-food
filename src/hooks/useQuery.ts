import { useEffect, useState } from "react";

export default function useQuery<
  TFn extends (params?: never) => Promise<unknown>,
>(apiFn: TFn, params?: Parameters<TFn>[0]) {
  type TData = Awaited<ReturnType<TFn>>;
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const result = await apiFn(params);
        if (!cancelled) setData(result as TData);
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) {
          setTimeout(() => setLoading(false), 500); // Add a small delay for better UX
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(params), tick]);

  const refetch = () => setTick((t) => t + 1);

  return { data, loading, error, refetch };
}
