import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../theme.service";
import { HelpButtonComponent } from "./helpButton/helpButton.component";
import { HelpService } from "./helpButton/helpService";

@Component({
  selector: "ngx-layout-topbar",
  templateUrl: "./topbar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TopbarComponent {
  @Input({ required: true }) topbarHeight!: number;

  @ViewChild('helpContainer', { read: ViewContainerRef }) helpContainer!: ViewContainerRef;

  constructor(public themeService: ThemeService, private helpService: HelpService, private resolver: ComponentFactoryResolver) {
    this.helpService.setHelpComponentLoader(this.loadHelpComponent.bind(this));
  }

  loadHelpComponent() {
    const factory = this.resolver.resolveComponentFactory(HelpButtonComponent);
    this.helpContainer.clear(); // Clear previous help content
    this.helpContainer.createComponent(factory); // Dynamically load HelpButtonComponent
  }
}
