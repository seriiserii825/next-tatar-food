"use client";

import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import useLoginForm from "@/hooks/useLoginForm";

export function LoginForm() {
  const { form, handleChange, errors, firstTouch, onSubmit } = useLoginForm();
  return (
    <form onSubmit={onSubmit} autoComplete="off" className="max-w-lg mx-auto flex flex-col gap-4">
      <Input
        type="email"
        name="my-email"
        autoComplete="nope"
        placeholder="Email"
        aria-invalid={errors.email && firstTouch}
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="border p-2 rounded"
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
        className="border p-2 rounded"
      />
      {firstTouch && errors.password && <ShowError error={errors.password[0]} />}

      <button type="submit" className=" bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}
