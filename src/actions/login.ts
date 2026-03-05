import { authClient } from "@/lib/auth-client";
import { TLoginFormData } from "@/schemas/loginSchema";
import toast from "react-hot-toast";

export default async function login(formData: TLoginFormData) {
  const { error } = await authClient.signIn.email({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    toast.error(error.message ?? "Login failed");
    return;
  }
}
