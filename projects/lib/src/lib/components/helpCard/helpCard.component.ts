import { Component, Input } from '@angular/core';
import { TopbarComponent } from '@emilgramdk/ngx-layout';

@Component({
  selector: 'help-card',
  templateUrl: './helpCard.component.html',
  standalone: true,
  imports: [TopbarComponent],
})
export class HelpComponent {
  @Input() helpCardData: any;

  arasURL = '_blank';

  constructor() {
    this.arasURL = 'https://arasBaseURL/Client'; // Brug din config-logik her
  }

  openAras() {
    window.open(this.arasURL, '_blank');
  }

  closeHelpCard() {
    // Logik til at fjerne komponenten fra DOM, hvis nødvendigt
  }
}
