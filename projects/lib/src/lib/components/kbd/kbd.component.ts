import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-kbd",
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let part of keyParts">
      <span class="kbd">{{ part }}</span>
      <span *ngIf="!isLastPart(part)">+</span>
    </ng-container>
  `,
})
export class KbdComponent {
  @Input() key: string = "";

  get keyParts() {
    return this.key.split("+").map((part) => part.trim());
  }

  isLastPart(part: string): boolean {
    return part === this.keyParts[this.keyParts.length - 1];
  }
}
