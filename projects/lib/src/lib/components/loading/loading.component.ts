import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-layout-loading",
  templateUrl: "./loading.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class LoadingComponent {
  @Input() logo?: string;

  constructor() {}
}
