import { Component, Input } from "@angular/core";
import { LayoutService } from "../../layout.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ngx-layout-topbar",
  templateUrl: "./topbar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TopbarComponent {
  @Input() title?: string;
  @Input() subTitle?: string;
  @Input() showThemeToggle: boolean = true;

  constructor(public layoutService: LayoutService) {}
}
