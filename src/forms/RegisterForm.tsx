"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerZodSchema } from "@/zodSchemas/registerZodSchema";
import Button from "@/components/UI/Button";

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
      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={`border p-3 rounded-xl w-full focus:outline-none focus:ring-2 transition-all
            ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-warm-accent"}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className={`border p-3 rounded-xl w-full focus:outline-none focus:ring-2 transition-all
            ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-warm-accent"}`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className={`border p-3 rounded-xl w-full focus:outline-none focus:ring-2 transition-all
            ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-warm-accent"}`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-warm-accent to-warm-accentLight hover:from-warm-accentLight hover:to-warm-accent text-warm-bg py-3.5 rounded-3xl font-semibold transition-all disabled:opacity-70 mt-2">
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
