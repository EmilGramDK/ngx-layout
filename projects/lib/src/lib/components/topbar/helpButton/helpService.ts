import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpService {
  helpComponentLoader!: Function;  // Using definite assignment assertion

  setHelpComponentLoader(loader: Function) {
    this.helpComponentLoader = loader;
  }

  toggleHelp() {
    if (this.helpComponentLoader) {
      this.helpComponentLoader(); // Dynamically load the HelpButtonComponent
    }
  }
}
