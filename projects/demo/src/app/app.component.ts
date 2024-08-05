import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  LayoutComponent,
  ThemeService,
  ThemeSettings,
} from "@emilgramdk/ngx-layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "test_project";

  public themeSettings: ThemeSettings = {
    defaultTheme: "dark",
    showToggle: true,
    themeToggleSunIcon: "pi pi-sun",
    themeToggleMoonIcon: "pi pi-clock",
  };

  constructor(private themeService: ThemeService) {
    this.themeService.setSettings(this.themeSettings);
  }
}
