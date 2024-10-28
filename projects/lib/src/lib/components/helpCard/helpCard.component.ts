import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { KbdComponent } from '../kbd/kbd.component';

@Component({
  selector: 'help-card',
  templateUrl: './helpCard.component.html',
  standalone: true,
  imports: [KbdComponent],
})
export class HelpComponent {

  constructor(public themeService: ThemeService) {}

  shortLink(link: string) {
    return link.replace(/(^\w+:|^)\/\//, '');
  }
}
