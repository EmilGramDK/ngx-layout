import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { SidebarFooter, SidebarRoute } from "../../interfaces";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-sidebar",
  templateUrl: "./sidebar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {
  routes: SidebarRoute[] = [];
  @Input() extraRoutes: SidebarRoute[] = [];
  @Input() logo?: string;
  @Input() footer?: SidebarFooter;
  @Output() footerOnClick = new EventEmitter<void>();

  public sidebarVisible: boolean = false;
  public path: string = "";

  constructor(private router: Router, public themeService: ThemeService) {
    this.routes = this.router.config;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // remove first slash
        this.path = this.router.url.slice(1);
      }
    });
  }

  toggleSidebar() {
    console.log("toggle sidebar");
    this.sidebarVisible = !this.sidebarVisible;
  }

  goToPage(route: string, toggleSidebar: boolean = false) {
    if (toggleSidebar) {
      this.sidebarVisible = !this.sidebarVisible;
    }
    this.router.navigate([route]);
  }

  footerClick() {
    this.footerOnClick.emit();
  }
}
