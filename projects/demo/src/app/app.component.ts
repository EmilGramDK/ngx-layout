import { Component } from "@angular/core";
import { HelpCard, LayoutComponent, ThemeService } from "@emilgramdk/ngx-layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "test_project";

  constructor(private themeService: ThemeService) {

    const helpCardData: HelpCard = {
      description: "This is a test application.",
      links: [
        {
          title: "Google",
          link: "https://www.google.com",
        },
        {
          title: "Bing",
          link: "https://www.bing.com",
        }
      ],
      contacts: [
        {
          title: "Sofware developer",
          name: "John Doe",
          email: "john@doe.com",
        },
        {
          title: "Assistent",
          name: "Jane Doe",
          email: "Johndown@doe.com",
        }
      ]
    };

    const LogoData = {
      path : "/logo.png",
      logoText: "Test App"
    }


    this.themeService.setConfig({
      titleSuffix: "Demo App",
      helpCard: helpCardData,
      showSidebar: true,
      logo: LogoData 
    })

  }

 
}
