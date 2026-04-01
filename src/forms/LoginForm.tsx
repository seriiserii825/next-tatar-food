"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { loginZodSchema } from "@/zodSchemas/loginZodSchema";

// Тип формы на основе Zod
type LoginForm = z.infer<typeof loginZodSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginZodSchema),
    mode: "onBlur", // или "onChange"
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      console.log("Registration data:", data);
      // Здесь будет твой API запрос
      alert("Registration successful! (demo)");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-md">
      <Input
        type="email"
        placeholder="Email address"
        autocomplete="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        type="password"
        placeholder="Password"
        autocomplete="new-password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Login..." : "Login"}
      </Button>
    </form>
  );
}
