import { Routes } from "@angular/router";
import { SidebarRoute } from "../../../lib/src/lib/interfaces";
import { HomeComponent } from "./home/home.component";
import { ToolBarComponent } from "./toolbar/toolbar.component";

export const routes: SidebarRoute[] = [
  {
    title: "Home",
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    icon: "pi pi-home",
  },
  {
    title: "Toolbar",
    path: "home2",
    component: ToolBarComponent,
    icon: "pi pi-wrench",
  },
];
