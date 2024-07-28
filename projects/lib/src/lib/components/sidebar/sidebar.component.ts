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
  @Input() logo?: string;
  @Input() footer?: SidebarFooter;

  public path: string = "";

  constructor(private router: Router) {
    this.routes = this.router.config;

    this.router.events.subscribe((val) => {
      this.path = this.router.url.replace("/", "");
    });
  }

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
