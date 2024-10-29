import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { GroupRoute, SidebarRoute } from "../../interfaces";
import { TopbarComponent } from "../topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { ThemeService } from "../../theme.service";
import { RouterOutlet } from "@angular/router";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "ngx-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["../../assets/styles.css"],
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    LoadingComponent,
    CommonModule,
    RouterOutlet,
    DialogModule,
  ],
})
export class LayoutComponent {
  @Input() renderApp?: any = true;
  @Input() loading?: any = false;
  @Input() groupRoutes: GroupRoute[] = [];
  @Input() extraRoutes: SidebarRoute[] = [];
  @ContentChild("topbar") topbarTemplate!: TemplateRef<any>;

  public sidebarCollapsed: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
