"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";

export function LoginForm() {
  const [firstTouch, setFirstTouch] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const passwordsMatch = form.password === form.confirmPassword;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFirstTouch(true);
    if (!form.email || !form.password || !form.confirmPassword) {
      toast.error("Please fill in all fields!");
      return;
    }
    if (!passwordsMatch) {
      toast.error("Passwords do not match!");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
      <Input
        type="email"
        name="my-email"
        autoComplete="off"
        placeholder="Email"
        aria-invalid={!form.email && firstTouch}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded"
      />
      {firstTouch && !form.email && <ShowError error="Email is required!" />}
      <Input
        type="password"
        name="my-password"
        placeholder="Password"
        autoComplete="off"
        aria-invalid={!form.password && firstTouch}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 rounded"
      />
      {firstTouch && !form.password && <ShowError error="Password is required!" />}
      <Input
        type="password"
        name="my-confirm-password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        aria-invalid={!passwordsMatch && firstTouch}
        className="border p-2 rounded"
      />
      {firstTouch && !passwordsMatch && <ShowError error="Passwords do not match!" />}

      <button type="submit" className=" bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
