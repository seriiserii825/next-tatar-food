import RegisterForm from "@/forms/RegisterForm";

export default function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-warm-card p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-warm-accent-light">
          Create an Account
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
}
