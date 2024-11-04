import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { _LayoutConfig, defaultConfig } from "./config";
import { Title } from "@angular/platform-browser";
import { LayoutConfig } from "./interfaces";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly themeKey = "theme";
  private _layoutConfig?: _LayoutConfig;
  public theme: "light" | "dark" = "dark";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private titleService: Title,
  ) {
    this.initializeTheme();
  }

  public get layoutConfig() {
    if (!this._layoutConfig) {
      throw new Error(
        "Layout config not set. Call themeService.setConfig() first.",
      );
    }
    return this._layoutConfig;
  }

  public setConfig(config: LayoutConfig) {
    this._layoutConfig = { ...defaultConfig, ...config };
    this.setTitle();
  }

  public setTitle(title?: string) {
    let _title = this._layoutConfig?.titleSuffix;

    if (title) {
      _title = `${title} | ${_title}`;
    }

    this.titleService.setTitle(_title || "");
  }

  public toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
  }

  private initializeTheme() {
    const savedTheme = this.getStoredTheme();
    const theme = savedTheme || "dark";
    this.theme = theme;
    this.applyTheme(theme);
  }

  private getStoredTheme(): "light" | "dark" {
    const storedTheme = localStorage.getItem(this.themeKey) || "dark";
    return storedTheme as "light" | "dark";
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
