"use client";

import { siteConfig } from "@/config/siteConfig";
import useSetActiveLink from "@/hooks/useSetActiveLink";
import Link from "next/link";

export default function Menu() {
  function displayMenu() {
    return siteConfig.menu.map((link, index) => (
      <Link
        href={link.href}
        key={index}
        className={`hover:text-amber-600 transition duration-300 ${useSetActiveLink(link.href)}`}>
        {link.name}
      </Link>
    ));
  }

  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">{displayMenu()}</nav>
  );
}
