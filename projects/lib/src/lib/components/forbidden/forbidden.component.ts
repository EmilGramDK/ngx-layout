import { Component } from "@angular/core";
import { DialogModule } from "primeng/dialog";
import { HelpComponent } from "../helpCard/helpCard.component";

@Component({
  selector: "app-forbidden",
  templateUrl: "./forbidden.component.html",
  standalone: true,
  imports: [DialogModule, HelpComponent],
})
export class ForbiddenComponent {
  public showHelpCard: boolean = false;

  constructor() {}

  public tryAgain() {
    const url = window.location.href;
    let baseUrl = url.split("/auth_unauthorized")[0];

    window.location.href = baseUrl;
  }
}
