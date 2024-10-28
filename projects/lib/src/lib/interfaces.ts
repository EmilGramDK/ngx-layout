import { Route } from "@angular/router";

export interface SidebarRoute extends Route {
  hideFromMenu?: boolean;
  icon?: string;
}

export interface SidebarFooter {
  title?: string;
  subTitle?: string;
}

export interface LogoInfo {
  logo: string;
  logoText: string;
}

export interface GroupRoute {
  title: string;
  routes: SidebarRoute[];
}

export interface HelpCard {
  description: string;
  links: HelpCardLink[];
  contacts: HelpCardContact[];
}

export interface HelpCardLink {
  title: string;
  link: string;
}

export interface HelpCardContact {
  title: string;
  name: string;
  email: string;
}