import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

export default function useLoginForm() {
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

  function handleChange(field: keyof FormData, value: string) {
    const newForm = { ...form, [field]: value };
    setForm(newForm);
    if (firstTouch) {
      const result = schema.safeParse(newForm);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
    }
  }

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
  return {
    form,
    setForm,
    onSubmit,
    firstTouch,
    errors,
    handleChange,
  };
}
