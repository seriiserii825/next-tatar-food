import { ILink } from "./ILink";

type TpagesLinks = "/" | "/ingredients" | "/about";

export interface ISiteConfig {
  title: string;
  description: string;
  menu: ILink[];
  authMenu: ILink[];
  pagesContent: {
    [key in TpagesLinks]: {
      text: string;
    };
  };
}
