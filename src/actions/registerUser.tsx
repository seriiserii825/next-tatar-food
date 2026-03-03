"use server";

import { IRegisterForm } from "@/interfaces/IRegisterForm";
import prisma from "@/lib/prisma";

export default async function registerUser(form: IRegisterForm) {
  try {
    const user = await prisma.user.create({
      data: {
        email: form.email,
        password: form.password,
      },
    });
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Failed to register user" };
  }
}
