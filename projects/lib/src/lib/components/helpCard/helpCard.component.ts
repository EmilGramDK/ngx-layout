import { Component, Input } from '@angular/core';
import { HelpCard } from "../../interfaces";

@Component({
  selector: 'help-card',
  templateUrl: './helpCard.component.html',
  standalone: true,
  imports: [],
})
export class HelpComponent {
  @Input() helpCard?: HelpCard;

  constructor() {}
  
  closeHelpCard() {
    // Logik til at fjerne komponenten fra DOM, hvis nødvendigt
  }

  shortLink(link: string) {
    return link.replace(/(^\w+:|^)\/\//, '');
  }
}
