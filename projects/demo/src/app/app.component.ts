import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutComponent, ThemeService } from "@emilgramdk/ngx-layout";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms'; 
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';  // Import ListboxModule

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
    ListboxModule  // Add ListboxModule to imports
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

  constructor() {
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
