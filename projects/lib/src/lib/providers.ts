import {
  Injectable,
  makeEnvironmentProviders,
  type EnvironmentProviders,
} from "@angular/core";
import { LAYOUT_CONFIG, LayoutConfig, mergeLayoutConfig } from "./config";
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
 * Allows to provide the `Layout` configuration.
 *
 * @example
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideLayout()],
 * };
 */
export function provideLayout(
  config: Partial<LayoutConfig>
): EnvironmentProviders {
  const mergedConfig = mergeLayoutConfig(config);
  return makeEnvironmentProviders([
    { provide: LAYOUT_CONFIG, useValue: mergedConfig },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]);
}
