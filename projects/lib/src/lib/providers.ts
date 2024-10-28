import {
  Injectable,
  makeEnvironmentProviders,
  type EnvironmentProviders,
} from "@angular/core";
import { _LayoutConfig } from "./config";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { ThemeService } from "./theme.service";

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private themeService: ThemeService
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(
        `${title} | ${this.themeService.layoutConfig.titleSuffix}`
      );
    }
  }
}

/**
 * Allows to provide the `TitleStrategy`.
 *
 * @example
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideTitleStrategy()],
 * };
 */
export function provideTitleStrategy(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]);
}
