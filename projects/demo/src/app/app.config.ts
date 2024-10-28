import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideTitleStrategy } from "@emilgramdk/ngx-layout";

export const appConfig: ApplicationConfig = {
  providers: [
    provideTitleStrategy(),
    provideRouter(routes),
    provideAnimations(),
  ],
};


