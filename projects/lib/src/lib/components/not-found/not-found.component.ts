import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  standalone: true,
  imports: [],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  public goBack() {
    this.router.navigate(["/"]);
  }
}
