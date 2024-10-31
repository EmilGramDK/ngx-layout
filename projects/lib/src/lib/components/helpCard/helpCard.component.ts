import { Component } from "@angular/core";
import { ThemeService } from "../../theme.service";
import { KbdComponent } from "../kbd/kbd.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "help-card",
  templateUrl: "./helpCard.component.html",
  standalone: true,
  imports: [KbdComponent, CommonModule],
})
export class HelpComponent {
  constructor(public themeService: ThemeService) {}

  shortLink(link: string) {
    return link.replace(/(^\w+:|^)\/\//, "");
  }

  extractDomain(link: string) {
    try {
      const { hostname } = new URL(link);
      return hostname; // Correctly return the hostname here
    } catch (error) {
      console.error("Invalid URL:", error);
      return null; // Return null if an error occurs
    }
  }
}
