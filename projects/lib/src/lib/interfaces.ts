import { Route } from "@angular/router";

export interface SidebarRoute extends Route {
  showInMenu?: boolean;
  icon?: string;
}

export interface SidebarFooter {
  title: string;
  subTitle: string;
  onClick: () => void;
}
