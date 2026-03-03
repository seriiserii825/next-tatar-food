"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import { z } from "zod";

export function LoginForm() {
  const schema = z
    .object({
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Min 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  type FormData = z.infer<typeof schema>;

  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [firstTouch, setFirstTouch] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  }>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFirstTouch(true);

    const result = schema.safeParse(form);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setErrors(errors);
      return;
    }
    setErrors({});
    console.log(result.data, "result.data");
    toast.success("Form submitted successfully!");
    // result.data — типизированные данные
  }

  return (
    <form onSubmit={onSubmit} autoComplete="off" className="max-w-lg mx-auto flex flex-col gap-4">
      <Input
        type="email"
        name="my-email"
        autoComplete="nope"
        placeholder="Email"
        aria-invalid={errors.email && firstTouch}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
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
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 rounded"
      />
      {firstTouch && errors.password && <ShowError error={errors.password[0]} />}
      <Input
        type="password"
        name="my-confirm-password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
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
