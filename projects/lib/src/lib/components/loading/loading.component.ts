import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-loading",
  templateUrl: "./loading.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class LoadingComponent {
  constructor(public themeService: ThemeService) {}
}
