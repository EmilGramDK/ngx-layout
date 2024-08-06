import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutComponent, ThemeService } from "@emilgramdk/ngx-layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "test_project";
}
