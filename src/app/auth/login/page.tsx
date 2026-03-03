import { LoginForm } from "@/forms/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <LoginForm />
        <div className="mt-4 text-center">
          <p>Don't have an account?</p>
          <Link href="/auth/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
