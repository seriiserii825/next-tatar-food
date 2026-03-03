import { LoginForm } from "@/forms/RegisterForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-20">
      <div className="p-8 bg-white rounded shadow max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
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
