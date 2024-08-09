import { InjectionToken } from "@angular/core";

// Defines the shape of the configuration object for the the Layout.
export interface LayoutConfig {
  showToggle: boolean;
  titleSuffix: string;
  themeToggleSunIcon: string;
  themeToggleMoonIcon: string;
  burgerMenuIcon: string;
}

// Default configuration for the Layout.
const defaultLayoutConfig: LayoutConfig = {
  showToggle: true,
  titleSuffix: "",
  themeToggleSunIcon: "pi pi-sun",
  themeToggleMoonIcon: "pi pi-moon",
  burgerMenuIcon: "pi pi-bars",
};

/**
 * Merges the provided configuration with the default configuration.
 * @param config - Partial configuration provided by the user.
 * @returns A complete LayoutConfig object.
 */
export function mergeLayoutConfig(
  config: Partial<LayoutConfig> = {}
): LayoutConfig {
  return { ...defaultLayoutConfig, ...config };
}

/**
 * Token to provide configuration for the `Layout`.
 * This token is used to inject the configuration object into the service.
 */
export const LAYOUT_CONFIG = new InjectionToken<LayoutConfig>("layoutConfig", {
  providedIn: "root",
  factory: (): LayoutConfig => {
    return {
      ...defaultLayoutConfig,
    };
  },
});

/**
 * This interface is only here for backward compatibility, **do not add it by yourself**
 * @ignore
 */
export interface LayoutConfiguration {
  /**
   * @deprecated Use `provideLayout()` method instead
   */
  config?: LayoutConfig;
}
