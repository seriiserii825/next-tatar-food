export default function Loading() {
  return (
    <section className="mt-12">
      <div className="mb-6 flex justify-center">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-amber-100" />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {["w-32", "w-24", "w-16", "w-24", "w-20"].map((w, i) => (
                <th key={i} className="px-6 py-3 text-left">
                  <div className={`h-4 ${w} animate-pulse rounded bg-gray-300`} />
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {Array.from({ length: 5 }).map((_, row) => (
              <tr key={row}>
                {["w-28", "w-20", "w-12", "w-20", "w-16"].map((w, col) => (
                  <td key={col} className="px-6 py-4">
                    <div
                      className={`h-4 ${w} animate-pulse rounded bg-amber-50`}
                      style={{ animationDelay: `${(row * 5 + col) * 40}ms` }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
