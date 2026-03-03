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

  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
      {links.map((link, index) => (
        <Link href={link.href} key={index} className="hover:text-amber-600 transition">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
