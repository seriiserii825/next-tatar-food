import { RegisterForm } from "@/forms/RegisterForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <RegisterForm />
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
