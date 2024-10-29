import { Routes } from "@angular/router";
import { SidebarRoute } from "../../../lib/src/lib/interfaces";
import { HomeComponent } from "./home/home.component";
import { ToolBarComponent } from "./toolbar/toolbar.component";
import { ForbiddenComponent, NotFoundComponent } from "@emilgramdk/ngx-layout";

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
  {
    title: "Forbidden",
    path: "auth_unauthorized",
    component: ForbiddenComponent,
    hideFromMenu: true,
  },
  {
    path: "**",
    pathMatch: "full",
    component: NotFoundComponent,
    hideFromMenu: true,
  },
];
