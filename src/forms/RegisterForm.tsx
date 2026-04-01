"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerZodSchema } from "@/zodSchemas/registerZodSchema";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

// Тип формы на основе Zod
type RegisterForm = z.infer<typeof registerZodSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerZodSchema),
    mode: "onBlur", // или "onChange"
  });

  const onSubmit = async (data: RegisterForm) => {
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

      <Input
        type="password"
        placeholder="Confirm Password"
        autocomplete="new-password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
