import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-topbar",
  templateUrl: "./topbar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TopbarComponent {
  @Input({ required: true }) topbarHeight!: number;

  constructor(public themeService: ThemeService) {
  }
}
