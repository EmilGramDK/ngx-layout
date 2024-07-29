import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SidebarFooter, SidebarRoute } from "../../interfaces";

@Component({
  selector: "ngx-layout-sidebar",
  templateUrl: "./sidebar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {
  routes: SidebarRoute[] = [];
  @Input() debug: boolean = false;
  @Input() logo?: string;
  @Input() footer?: SidebarFooter;
  @Input() footerOnClick: () => void = () => {
    console.log("Footer clicked");
  };

  public path: string = "";

  constructor(private router: Router) {
    this.routes = this.router.config;

    if (this.debug) {
      console.log("DEBUG LOG FROM SIDEBAR COMPONENT");
      console.log("Debug: ", this.debug);
      console.log("Routes: ", this.routes);
      console.log("Logo: ", this.logo);
      console.log("Footer: ", this.footer);
      console.log("FooterOnClick: ", this.footerOnClick);
    }

    this.router.events.subscribe((val) => {
      this.path = this.router.url.replace("/", "");
    });
  }

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
