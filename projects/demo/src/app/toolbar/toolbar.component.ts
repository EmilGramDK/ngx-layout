import { Component, OnInit } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";
import { InputTextModule } from "primeng/inputtext";
import { EditorModule } from "primeng/editor";
import { FormsModule } from "@angular/forms";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    EditorModule,
    FormsModule,
  ],
})
export class ToolBarComponent implements OnInit {
  items: MenuItem[] = [];
  text: string = ""; // Initialize the text property

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: "Update", icon: "pi pi-refresh" },
      { label: "Delete", icon: "pi pi-times" },
      { label: "Angular.io", icon: "pi pi-info", url: "http://angular.io" },
      { label: "Setup", icon: "pi pi-cog", routerLink: ["/setup"] },
    ];
  }
}
