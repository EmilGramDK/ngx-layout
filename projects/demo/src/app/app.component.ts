import { Component } from "@angular/core";
import {
  GroupRoute,
  HelpCard,
  LayoutComponent,
  SidebarRoute,
  ThemeService,
} from "@emilgramdk/ngx-layout";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "test_project";

  public groupedRoutes: GroupRoute[] = [
    {
      title: "Group 1",
      routes: [
        {
          title: "Home",
          icon: "pi pi-home",
        },
        {
          title: "test",
          icon: "pi pi-home",
        },
      ],
    },
    {
      title: "Group 2",
      routes: [
        {
          title: "Home",
          icon: "pi pi-home",
        },
        {
          title: "test",
          icon: "pi pi-home",
        },
      ],
    },
  ];

  public extraRoutes: SidebarRoute[] = [
    {
      title: "Home",
      icon: "pi pi-home",
    },
  ];

  constructor(private themeService: ThemeService) {
    const helpCardData: HelpCard = {
      description: "This is a test application.",
      shortcuts: [
        {
          description: "Home",
          shortcut: "ctrl + space + esc",
        },
        {
          description: "About",
          shortcut: "alt + enter + p",
        },
      ],
      links: [
        {
          title: "Google",
          link: "https://www.google.com",
        },
        {
          title: "Bing",
          link: "https://cdn.vox-cdn.com/thumbor/cY6f6QhlanusE6S4KDrfx7oAbk4=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
        },
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
          email: "Jane@doe.com",
        },
      ],
    };

    const FooterData = {
      title: "Footer Title",
      subTitle: "Footer Subtitle",
    };

    const LogoData = {
      onClickPath: "/",
      path: "/man-logo.png",
      logoText: "Demo App",
    };

    this.themeService.setConfig({
      titleSuffix: "Demo App",
      helpCard: helpCardData,
      showSidebar: true,
      logo: LogoData,
      footer: FooterData,
    });
  }
}
