"use client";
import { usePathname } from "next/navigation";

export default function useSetActiveLink(href: string): string {
  const pathname = usePathname();
  if (pathname === href) {
    return "text-amber-600";
  }
  return "";
}
