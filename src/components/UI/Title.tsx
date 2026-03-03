"use client";
import { siteConfig } from "@/config/siteConfig";
import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();
  const menu_item = siteConfig.menu.find((item) => item.href === pathname);
  const title = menu_item ? menu_item.name : siteConfig.title;
  return (
    <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900">
      {title}
    </h1>
  );
}
