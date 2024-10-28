import { InjectionToken } from "@angular/core";
import { HelpCard, LayoutConfig, Logo } from "./interfaces";

// Defines the shape of the configuration object for the the Layout.
export interface _LayoutConfig {
  showDarkModeToggle: boolean;
  titleSuffix: string;
  themeToggleSunIcon: string;
  themeToggleMoonIcon: string;
  burgerMenuIcon: string;
  showSidebar: boolean;
  showTopbar: boolean;
  topbarHeight: number;
  logo?: Logo;
  helpCard?: HelpCard;
}

// Default configuration for the Layout.
export const defaultConfig: _LayoutConfig = {
  showDarkModeToggle: true,
  titleSuffix: "",
  themeToggleSunIcon: "pi pi-sun",
  themeToggleMoonIcon: "pi pi-moon",
  burgerMenuIcon: "pi pi-bars",
  showSidebar: true,
  showTopbar: true,
  topbarHeight: 60,
};