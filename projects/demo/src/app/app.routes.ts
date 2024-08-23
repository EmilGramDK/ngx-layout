import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ToolBarComponent } from "./toolbar/toolbar.component";

export const routes: Routes = [
  {
    title: "Home",
    path: "",
    component: HomeComponent,
  },
  {
    title: "Toolbar",
    path: "home2",
    component: ToolBarComponent,
  },
];
