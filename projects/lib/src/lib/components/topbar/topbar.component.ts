import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';
import { HelpComponent } from '../helpCard/helpCard.component'; // Import the HelpComponent
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HelpCard } from '../../interfaces';


@Component({
  selector: 'ngx-layout-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, HelpComponent],
})
export class TopbarComponent {
  @Input({ required: true }) topbarHeight!: number;
  @Input(({required:true})) helpHide!: boolean;
  @Input() helpCard?: HelpCard;

  showHelpCard = false;
  toggleHelpCard() {
    this.showHelpCard = !this.showHelpCard;
  }


  constructor(
    public themeService: ThemeService,
  ) {}
}
