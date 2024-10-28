import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HelpCard, LayoutComponent, ThemeService, LogoInfo } from "@emilgramdk/ngx-layout";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms'; 
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';  // Import ListboxModule

// Importing PrimeNG Modules for Table and Tooltip
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet, 
    LayoutComponent, 
    AutoCompleteModule, 
    FormsModule,
    DropdownModule,
    TreeSelectModule,
    CascadeSelectModule,
    CalendarModule,
    ListboxModule,  // Add ListboxModule to imports

    // Adding PrimeNG Table, Panel, and Tooltip modules
    TableModule,
    PanelModule,
    TooltipModule
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "test_project";

  selectedItem: any;
  suggestions: any[] = [];

  selectedCity: any;
  cities: any[] = [];
  selectedNodes: any[] = [];
  nodes: any[] = [];

  countries: any[] = [];
  date: Date | null = null;

  logo = "../../public/logo.png";

  public logoInfoData: LogoInfo = {
    logo: "",
    logoText: "Test Application",
  };

  private checkLogoExistence(): void {
    fetch("/logo.png")
      .then((response) => {
        if (response.ok) {
          this.logoInfoData.logo = "/logo.png";
        }
      })
      .catch(() => {
        // If the logo does not exist or any error occurs, the logo remains empty.
        this.logoInfoData.logo = "";
      });
  }

  public helpCardData: HelpCard = {
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
  }

  components = [
    {
      name: 'Component A',
      description: 'This is a description for Component A.',
      owner: 'Owner 1',
      value: '123',
      unit: 'kg',
      offStdValue: '10',
      type: 'str'
    },
    {
      name: 'Component B',
      description: 'This is a description for Component B.',
      owner: 'Owner 2',
      value: '456',
      unit: 'm',
      offStdValue: '5',
      type: 'bool'
    },
    {
      name: 'Component C',
      description: 'This is a description for Component C.',
      owner: 'Owner 3',
      value: '789',
      unit: 'cm',
      offStdValue: '2',
      type: 'str'
    }
  ];

  options = [
    { label: 'Abs', value: 'abs' },
    { label: 'Rel', value: 'rel' },
    { label: 'Fac', value: 'fac' },
  ];

  constructor() {
    this.checkLogoExistence();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.nodes = [
      {
        label: 'Documents',
        data: 'Documents Folder',
        children: [
          {
            label: 'Work',
            data: 'Work Folder',
            children: [{ label: 'Reports', icon: 'pi pi-file', data: 'Reports' }]
          },
          {
            label: 'Home',
            data: 'Home Folder',
            children: [{ label: 'Invoices', icon: 'pi pi-file', data: 'Invoices' }]
          }
        ]
      },
      {
        label: 'Pictures',
        data: 'Pictures Folder',
        children: [
          { label: 'Barcelona', icon: 'pi pi-image', data: 'Barcelona' },
          { label: 'London', icon: 'pi pi-image', data: 'London' }
        ]
      }
    ];

    this.countries = [
      {
        name: 'USA',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles' },
              { cname: 'San Francisco' },
              { cname: 'San Diego' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Houston' },
              { cname: 'Dallas' },
              { cname: 'Austin' }
            ]
          }
        ]
      },
      {
        name: 'Canada',
        states: [
          {
            name: 'Ontario',
            cities: [
              { cname: 'Toronto' },
              { cname: 'Ottawa' },
              { cname: 'Hamilton' }
            ]
          },
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal' },
              { cname: 'Quebec City' }
            ]
          }
        ]
      }
    ];
  }

  search(event: any) {
    const query = event.query;
    this.suggestions = this.getFilteredItems(query);
  }

  getFilteredItems(query: string): any[] {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Kiwi'];
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }
}
