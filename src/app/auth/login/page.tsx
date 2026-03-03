import { LoginForm } from "@/forms/LoginForm";

export default function Page() {
  return (
    <div className="pt-20">
      <div className="p-8 bg-white rounded shadow max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
