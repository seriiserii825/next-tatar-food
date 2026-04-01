"use server";

import { TRegisterForm } from "@/types/TRegisterForm";
import { prisma } from "@/utils/prisma";

export async function registerUser(formData: TRegisterForm) {
  const user = await prisma.user.create({
    data: {
      email: formData.email,
      password: formData.password,
    },
  });
  return user;
}
