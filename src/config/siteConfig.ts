import { ILink } from "@/interfaces/ILink";
import { ISiteConfig } from "@/interfaces/ISiteConfig";

const links: ILink[] = [
  { name: "Recipes", href: "/" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "About", href: "/about" },
];

const authMenuLinks: ILink[] = [
  { name: "Login", href: "/auth/login" },
  { name: "Register", href: "/auth/register" },
];

export const siteConfig: ISiteConfig = {
  title: "Tatarian kitchen",
  description: "Tatar cuisine recipes",
  menu: links,
  authMenu: authMenuLinks,
};
