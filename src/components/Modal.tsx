interface IModalProps {
  title: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: IModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Title</h2>
        {children}
      </div>
    </div>
  );
}
