import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  Router,
  NavigationEnd,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { GroupRoute, SidebarFooter, SidebarRoute } from "../../interfaces";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-sidebar",
  templateUrl: "./sidebar.component.html",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  routes: SidebarRoute[] = [];
  @Input() extraRoutes: SidebarRoute[] = [];
  @Input() groupRoutes: GroupRoute[] = [];
  @Input() logo?: string;
  @Input() footer?: SidebarFooter;
  @Output() footerOnClick = new EventEmitter<void>();

  public sidebarVisible: boolean = false;

  constructor(private router: Router, public themeService: ThemeService) {
    this.routes = this.router.config;
  }

  toggleSidebar() {
    console.log("toggle sidebar");
    this.sidebarVisible = !this.sidebarVisible;
  }

  hideSidebar() {
    this.sidebarVisible = false;
  }

  goToPage(route: string) {
    this.router.navigate([route]);
    this.sidebarVisible = false;
  }

  footerClick() {
    this.footerOnClick.emit();
  }
}
