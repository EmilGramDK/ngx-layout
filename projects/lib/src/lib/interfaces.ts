import { Route } from "@angular/router";

export interface SidebarRoute extends Route {
  hideFromMenu?: boolean;
  icon?: string;
}

export interface SidebarFooter {
  title?: string;
  subTitle?: string;
}

export interface ThemeSettings {
  showToggle: boolean;
  defaultTheme: "light" | "dark";
  themeToggleSunIcon: string;
  themeToggleMoonIcon: string;
}

export const defaultThemeSettings: ThemeSettings = {
  showToggle: true,
  defaultTheme: "light",
  themeToggleSunIcon: "pi pi-sun",
  themeToggleMoonIcon: "pi pi-moon",
};
