interface IModalProps {
  title: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: IModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
