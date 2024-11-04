import { Route } from "@angular/router";
import { _LayoutConfig } from "./config";

export interface LayoutConfig extends Partial<_LayoutConfig> {}
export type SidebarRoutes = SidebarRoute[];

export interface SidebarRoute extends Route {
  hideFromMenu?: boolean;
  icon?: string;
}

export interface Logo {
  onClickPath?: string;
  path?: string;
  logoText?: string;
}

export interface Footer {
  title: string;
  subTitle: string;
  onClick?: () => void;
}

export interface GroupRoute {
  title: string;
  color?: string;
  routes: SidebarRoute[];
}

export interface HelpCard {
  title: string;
  description?: string;
  shortcuts?: HelpCardShortcut[];
  links?: HelpCardLink[];
  contacts?: HelpCardContact[];
}

export interface HelpCardLink {
  title: string;
  link: string;
}

export interface HelpCardShortcut {
  description: string;
  shortcut: string;
}

export interface HelpCardContact {
  title: string;
  name: string;
  email: string;
}
