import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-topbar",
  templateUrl: "./topbar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TopbarComponent {
  @Input() debug: boolean = false;
  @Input() title?: string;
  @Input() subTitle?: string;

  constructor(public themeService: ThemeService) {
    if (this.debug) {
      console.log("DEBUG LOG FROM TOPBAR COMPONENT");
      console.log("Debug: ", this.debug);
      console.log("Title: ", this.title);
      console.log("SubTitle: ", this.subTitle);
    }
  }
}
