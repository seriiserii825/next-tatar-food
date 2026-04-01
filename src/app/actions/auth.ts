"use server";

import { TRegisterForm } from "@/types/TRegisterForm";
import { prisma } from "@/utils/prisma";

export async function registerUser(formData: TRegisterForm) {
  try {
    const user = await prisma.user.create({
      data: {
        email: formData.email,
        password: formData.password,
      },
    });
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Failed to register user");
  }
}
