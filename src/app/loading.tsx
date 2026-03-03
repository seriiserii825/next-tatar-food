export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse space-y-8 px-6 py-8">
      {/* Page title / welcome */}
      <div className="h-6 w-48 rounded bg-gray-300" />

      {/* Main content area */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-2/3 rounded bg-gray-200" />
      </div>

      {/* Cards / list placeholder */}
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
        <div className="h-40 rounded-2xl bg-gray-200" />
        <div className="h-40 rounded-2xl bg-gray-200" />
        <div className="h-40 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
