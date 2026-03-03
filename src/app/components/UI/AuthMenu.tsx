"use client";

import { siteConfig } from "@/config/siteConfig";
import useSetActiveLink from "@/hooks/useSetActiveLink";
import Link from "next/link";

export default function AuthMenu() {
  function displayMenu() {
    return siteConfig.authMenu.map((link, index) => (
      <Link
        href={link.href}
        key={index}
        className={`hover:text-amber-600 transition duration-300 ${useSetActiveLink(link.href)}`}>
        {link.name}
      </Link>
    ));
  }
  return <nav className="flex gap-4">{displayMenu()}</nav>;
}
