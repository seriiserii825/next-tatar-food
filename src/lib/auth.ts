import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 1, // 1 days (default)
    updateAge: 60 * 60 * 12, // refresh cookie if >12 hours old
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // client-side cache for 5 min
    },
  },
});
