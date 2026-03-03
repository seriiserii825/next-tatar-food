"use client";

import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import useRegisterForm from "@/hooks/useRegisterForm";

export function RegisterForm() {
  const { form, handleChange, errors, firstTouch, onSubmit } = useRegisterForm();
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
      <Input
        type="password"
        name="my-confirm-password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        aria-invalid={errors.confirmPassword && firstTouch}
        className="border p-2 rounded"
      />
      {firstTouch && errors.confirmPassword && <ShowError error={errors.confirmPassword[0]} />}

      <button type="submit" className=" bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
