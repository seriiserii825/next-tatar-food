import { useEffect, useState } from "react";

export default function useQuery<TFn extends (params?: never) => Promise<unknown>>(
  apiFn: TFn,
  params?: Parameters<TFn>[0],
) {
  type TData = Awaited<ReturnType<TFn>>;
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const result = await apiFn(params);
        if (!cancelled) setData(result as TData);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(params)]);

  return { data, loading, error };
}
