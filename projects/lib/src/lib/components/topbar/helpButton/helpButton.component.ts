import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-button',
  templateUrl: './helpButton.component.html',
  standalone: true,
})
export class HelpButtonComponent implements OnInit {

  // Boolean to control visibility of the popup
  isPopupVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // You can initialize any necessary data here if needed
  }

  // Method to close the popup
  closePopup(): void {
    this.isPopupVisible = false;
  }
}
