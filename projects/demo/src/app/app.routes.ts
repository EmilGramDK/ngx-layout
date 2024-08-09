import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    title: "Home",
    path: "",
    component: HomeComponent,
  },
  {
    title: "Home 2",
    path: "home2",
    component: HomeComponent,
  },
];
