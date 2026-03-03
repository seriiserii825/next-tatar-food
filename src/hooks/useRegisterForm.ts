import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

export default function useRegisterForm() {
  const schema = z
    .object({
      name: z.string().min(2, "Min 2 characters").optional(),
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [firstTouch, setFirstTouch] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
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

    const { error } = await authClient.signUp.email({
      name: result.data.email,
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      toast.error(error.message ?? "Registration failed");
      return;
    }
    toast.success("Registered successfully!");
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
