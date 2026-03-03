import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

export default function useLoginForm() {
  const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
  });

  type FormData = z.infer<typeof schema>;

  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });
  const [firstTouch, setFirstTouch] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
  }>({});

  function handleChange(field: keyof FormData, value: string) {
    const newForm = { ...form, [field]: value };
    setForm(newForm);
    if (firstTouch) {
      const result = schema.safeParse(newForm);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFirstTouch(true);

    const result = schema.safeParse(form);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    setErrors({});

    const { error } = await authClient.signIn.email({
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      toast.error(error.message ?? "Login failed");
      return;
    }
    toast.success("Logged in successfully!");
  }

  return {
    form,
    setForm,
    onSubmit,
    firstTouch,
    errors,
    handleChange,
  };
}
