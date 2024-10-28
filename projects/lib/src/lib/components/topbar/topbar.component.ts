import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';
import { HelpComponent } from '../helpCard/helpCard.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HelpCard } from '../../interfaces';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'ngx-layout-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, HelpComponent, SidebarComponent],
})
export class TopbarComponent {
  @Input({ required: true }) topbarHeight!: number;
  @Input(({required:true})) helpHide!: boolean;
  @Input() helpCard?: HelpCard;
  
  @Output() toggleSidebar = new EventEmitter<void>();

  showHelpCard = false;
  iconSwitch = false;
  isMobile: boolean = false;

  constructor(public themeService: ThemeService) {
    this.checkScreenSize(); // Initial check
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  public toggleHelpCard() {
    this.showHelpCard = !this.showHelpCard;
  }

  public toggleSidebarClick() {
    this.toggleSidebar.emit();
    this.iconSwitch = !this.iconSwitch;
  }
}
