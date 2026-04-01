import LoginForm from "@/forms/LoginForm";

export default function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-warm-card p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-warm-accent-light">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
