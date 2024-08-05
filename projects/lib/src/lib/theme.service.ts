import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { defaultThemeSettings, ThemeSettings } from "./interfaces";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly themeKey = "theme";
  public themeSettings: ThemeSettings = defaultThemeSettings;
  public theme: "light" | "dark" = "dark";

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setSettings(settings: Partial<ThemeSettings>) {
    this.themeSettings = { ...this.themeSettings, ...settings };
    this.initializeTheme();
  }

  toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
  }

  private initializeTheme() {
    const savedTheme = this.getStoredTheme();
    const theme = savedTheme || this.themeSettings.defaultTheme;
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
