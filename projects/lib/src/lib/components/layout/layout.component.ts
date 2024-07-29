import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarFooter, ThemeSettings } from "../../interfaces";
import { TopbarComponent } from "../topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["../../assets/styles.css"],
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, LoadingComponent, CommonModule],
})
export class LayoutComponent {
  @Input() debug: boolean = false;
  @Input() renderApp: any = true;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() loading?: any = false;
  @Input() showTopbar?: any = true;
  @Input() logo?: string = "/assets/logo.png";
  @Input() themeSettings: Partial<ThemeSettings> = {};
  @Input() sidebarFooter?: SidebarFooter;
  @Output() sidebarFooterOnClick = new EventEmitter<void>();

  @ContentChild("topbar") topbarTemplate!: TemplateRef<any>;

  constructor(themeService: ThemeService) {
    themeService.setSettings(this.themeSettings);

    if (this.debug) {
      console.log("DEBUG LOG FROM LAYOUT COMPONENT");
      console.log("Debug: ", this.debug);
      console.log("Render App: ", this.renderApp);
      console.log("Title: ", this.title);
      console.log("Subtitle: ", this.subtitle);
      console.log("Loading: ", this.loading);
      console.log("Show Topbar: ", this.showTopbar);
      console.log("Logo: ", this.logo);
      console.log("Sidebar Footer: ", this.sidebarFooter);
    }
  }

  footerClick() {
    this.sidebarFooterOnClick.emit();
  }
}
