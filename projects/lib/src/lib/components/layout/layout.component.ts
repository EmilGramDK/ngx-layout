import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarFooter, SidebarRoute } from "../../interfaces";
import { TopbarComponent } from "../topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: "ngx-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["../../assets/styles.css"],
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, LoadingComponent, CommonModule],
})
export class LayoutComponent {
  @Input() show: boolean = true;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() loading?: boolean = false;
  @Input() showTopbar?: boolean = true;
  @Input() logo?: string = "/assets/logo.png";
  @Input() sidebarFooter?: SidebarFooter;

  @ContentChild("topbar") topbarTemplate!: TemplateRef<any>;
}
