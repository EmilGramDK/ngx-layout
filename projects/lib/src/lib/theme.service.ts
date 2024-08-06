import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { defaultThemeSettings, ThemeSettings } from "./interfaces";
import { LAYOUT_CONFIG, LayoutConfig } from "./config";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly themeKey = "theme";
  public layoutConfig: LayoutConfig;
  public theme: "light" | "dark" = "dark";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LAYOUT_CONFIG) private config: LayoutConfig,
    private titleService: Title
  ) {
    this.layoutConfig = this.config;
    this.initializeTheme();
    this.setTitle();
  }

  public setTitle(title?: string) {
    let _title = this.layoutConfig.titleSuffix;
    if (title) {
      _title = `${title} | ${_title}`;
    }

    this.titleService.setTitle(_title);
  }

  public toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
  }

  private initializeTheme() {
    const savedTheme = this.getStoredTheme();
    const theme = savedTheme || "light";
    this.theme = theme;
    this.applyTheme(theme);
  }

  private getStoredTheme(): "light" | "dark" | null {
    return localStorage.getItem(this.themeKey) as "light" | "dark" | null;
  }

  private applyTheme(theme: "light" | "dark") {
    this.theme = theme;
    localStorage.setItem(this.themeKey, theme);
    this.updateBodyClass(theme);
  }

  private updateBodyClass(theme: "light" | "dark") {
    if (theme === "dark") {
      this.document.body.classList.add("dark");
    } else {
      this.document.body.classList.remove("dark");
    }
  }
}
