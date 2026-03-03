interface ShowErrorProps {
  error: string;
}
export default function ShowError({ error }: ShowErrorProps) {
  return <div className="p-2 bg-red-100 text-xs text-red-700 rounded">{error}</div>;
}
