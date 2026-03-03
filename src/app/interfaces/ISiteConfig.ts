import { ILink } from "./ILink";

export interface ISiteConfig {
  title: string;
  description: string;
  menu: ILink[];
  authMenu: ILink[];
}
