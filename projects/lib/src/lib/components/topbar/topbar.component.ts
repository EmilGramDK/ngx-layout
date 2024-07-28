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
  @Input() debug: boolean = false;
  @Input() title?: string;
  @Input() subTitle?: string;
  @Input() showThemeToggle: any = true;

  constructor(public layoutService: LayoutService) {
    if (this.debug) {
      console.log("DEBUG LOG FROM TOPBAR COMPONENT");
      console.log("Debug: ", this.debug);
      console.log("Title: ", this.title);
      console.log("SubTitle: ", this.subTitle);
      console.log("Show Theme Toggle: ", this.showThemeToggle);
    }
  }
}
