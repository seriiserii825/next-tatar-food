"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMenuLoggedIn from "./HeaderMenuLoggedIn";
import HeaderMenuLoggedOut from "./HeaderMenuLoggedOut";
interface IMenuItem {
  label: string;
  href: string;
}

export default function Header() {
  const isAuthenticated = false;

  const menu_items: IMenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href;
  }
  const defaultMenuItemClasses = "hover:text-warm-accent-light transition-colors";
  const activeMenuItemClasses = "text-warm-accent-light font-semibold";
  function getMenuItemClasses(href: string) {
    return isActive(href)
      ? `${defaultMenuItemClasses} ${activeMenuItemClasses}`
      : defaultMenuItemClasses;
  }
  return (
    <header className="bg-warm-card border-b border-warm-accent/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-warm-accent to-warm-accent-light rounded-2xl flex items-center justify-center text-3xl shadow-lg">
            🍲
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-warm-accent-light">
              Tatar Cuisine
            </h1>
            <p className="text-xs text-warm-accent -mt-1 tracking-widest">TASTE OF TRADITION</p>
          </div>
        </div>

        <nav className="flex items-center gap-9 text-sm font-medium">
          {menu_items.map((item) => (
            <Link key={item.label} href={item.href} className={getMenuItemClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        {isAuthenticated ? <HeaderMenuLoggedIn /> : <HeaderMenuLoggedOut />}
      </div>
    </header>
  );
}
