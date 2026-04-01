"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerZodSchema } from "@/zodSchemas/registerZodSchema";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { TRegisterForm } from "@/types/TRegisterForm";
import { registerUser } from "@/app/actions/auth";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerZodSchema),
    mode: "onBlur", // или "onChange"
  });

  const onSubmit = async (formData: TRegisterForm) => {
    try {
      const user = await registerUser(formData);
      console.log(user, "user");
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
