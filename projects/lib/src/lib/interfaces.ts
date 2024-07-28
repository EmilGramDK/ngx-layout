import { Route } from "@angular/router";

export interface SidebarRoute extends Route {
  hideFromMenu?: boolean;
  icon?: string;
}

export interface SidebarFooter {
  title: string;
  subTitle: string;
  onClick: () => void;
}
