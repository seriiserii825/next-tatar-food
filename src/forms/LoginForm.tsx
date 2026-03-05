"use client";

import login from "@/actions/login";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import useForm from "@/hooks/useForm";
import loginSchema, { TLoginFormData } from "@/schemas/loginSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function LoginForm() {
  const router = useRouter();
  const { form, handleChange, errors, firstTouch, onSubmit } =
    useForm<TLoginFormData>(
      loginSchema(),
      {
        email: "",
        password: "",
      },
      login,
      onSuccess,
    );

  function onSuccess() {
    toast.success("Logged in successfully!");
    router.push("/about");
  }
  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className="mx-auto flex max-w-lg flex-col gap-4"
    >
      <Input
        type="email"
        name="my-email"
        autoComplete="nope"
        placeholder="Email"
        aria-invalid={errors.email && firstTouch}
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="rounded border p-2"
      />
      {firstTouch && errors.email && <ShowError error={errors.email[0]} />}
      <Input
        type="password"
        name="my-password"
        placeholder="Password"
        autoComplete="new-password"
        aria-invalid={errors.password && firstTouch}
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
        className="rounded border p-2"
      />
      {firstTouch && errors.password && (
        <ShowError error={errors.password[0]} />
      )}

      <button type="submit" className="rounded bg-blue-500 p-2 text-white">
        Login
      </button>
    </form>
  );
}
