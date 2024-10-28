import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-kbd',
  standalone: true,
  imports: [NgFor, NgIf], // Import NgFor here to use *ngFor in this component
  template: `
    <ng-container *ngFor="let part of keyParts">
      <span class="kbd">{{ part }}</span>
      <span *ngIf="!isLastPart(part)">+</span>
    </ng-container>
  `,
})
export class KbdComponent {
  @Input() key: string = '';
  
  get keyParts() {
    return this.key.split('+').map(part => part.trim());
  }

  isLastPart(part: string): boolean {
    return part === this.keyParts[this.keyParts.length - 1];
  }
}
