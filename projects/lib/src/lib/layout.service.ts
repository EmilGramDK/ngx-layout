import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  private readonly themeKey = "theme";
  public theme: "light" | "dark" = "dark";

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.initializeTheme();
  }

  private initializeTheme() {
    const savedTheme = this.getStoredTheme();
    const theme = savedTheme || "dark";
    this.theme = theme;
    this.applyTheme(theme);
  }

  private getStoredTheme(): "light" | "dark" | null {
    return localStorage.getItem(this.themeKey) as "light" | "dark" | null;
  }

  toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
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
