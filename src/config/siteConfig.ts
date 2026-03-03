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
  pagesContent: {
    "/": {
      text: "Welcome to Tatarian kitchen! Here you can find delicious recipes of Tatar cuisine.",
    },
    "/ingredients": {
      text: `
        <p>
          Tatar cuisine is a vibrant combination of hearty meat dishes, aromatic baked goods,
          and delicate dairy products, reflecting the rich history and hospitality of the Tatar people.
        </p>

        <h2>Main dishes of Tatar cuisine</h2>

        <ul>
          <li>
            <strong>Öçpoçmak</strong> – triangular pastries filled with chopped meat, potatoes,
            and onions. Before baking, broth is added to the center.
          </li>
          <li>
            <strong>Bäleş</strong> – a large pie with duck, beef, or chicken mixed with potatoes
            and onions. A festive dish.
          </li>
          <li>
            <strong>Chak-chak</strong> – balls of fried dough coated in honey.
            A traditional treat for celebrations.
          </li>
          <li>
            <strong>Kystybyi</strong> – thin flatbreads filled with mashed potatoes
            or wheat porridge.
          </li>
          <li>
            <strong>Shulpa</strong> – a rich soup with meat, potatoes,
            and homemade noodles.
          </li>
        </ul>
      `,
    },
    "/about": {
      text: "Learn more about the history and culture of Tatar cuisine.",
    },
  },
};
