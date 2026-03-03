"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Menu() {
  interface ILink {
    name: string;
    href: string;
  }
  const links: ILink[] = [
    { name: "Recipes", href: "/" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "About", href: "/about" },
  ];

  function setActiveLink(href: string): string {
    const pathname = usePathname();
    if (pathname === href) {
      return "text-amber-600";
    }
    return "";
  }

  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`hover:text-amber-600 transition duration-300 ${setActiveLink(link.href)}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
