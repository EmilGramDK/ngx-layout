# Layout for Angular

_This project is currently a work in progress, and significant updates or breaking changes are anticipated as development continues. We are actively refining and improving the library, so please be aware that functionality may evolve, and existing features could be modified or replaced in future releases._

## Overview

The **ngx-layout** library provides a ready-to-use layout template for Angular applications, featuring a sidebar and a dark/light mode toggle. This library streamlines the process of implementing a consistent layout across projects, saving development time and ensuring a uniform user experience.

## Features

- **Sidebar Navigation**: Includes a customizable sidebar for easy navigation.
- **Dark/Light Mode Toggle**: Built-in support for switching between dark and light themes.

## TODO

- **More Customization**: Make it easier to configure the layout and styles to match your application's branding.
- **Responsive Layout**: Automatically adjusts to different screen sizes, ensuring a great experience on both desktop and mobile devices.

## Installation

To install the library, use the following npm command:

```bash
npm install @emilgramdk/ngx-layout
```

## Usage

1. **Import CSS**: Import the required css as the first style under "styles" in your angular.json

   ```typescript
   "styles": [
     "node_modules/@emilgramdk/ngx-layout/lib/assets/styles.css",
     "node_modules/@emilgramdk/ngx-layout/lib/assets/primeng_theme.css",
     "node_modules/primeicons/primeicons.css"
   ]
   ```

2. **Import in tailwind.config.js**: Import the required css as the first style under "styles" in your angular.json

   ```typescript
   content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@emilgramdk/ngx-layout/**/*.{html,ts,mjs}", // Include your library components
   ],
   ```

3. **Add To App Component**:

   ```typescript
   import { LayoutComponent, ThemeService } from '@emilgramdk/ngx-layout';

   @Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
   })
   export class AppComponent {
     constructor(public themeService: ThemeService) {}

     this.themeService.setConfig(layoutConfig);
   }

   const layoutConfig: LayoutConfig = {}
   ```

4. **Add to App Component HTML**: Add the layout to your root component.

   ```html
   <ngx-layout [loading]="boolean" [renderApp]="boolean"> </ngx-layout>
   ```

5. **Topbar buttons**: You can add custom buttons to the Topbar with ng-template
   ```html
   <ngx-layout>
     <ng-template #topbar> Topbar Button </ng-template>
   </ngx-layout>
   ```

## License

This project is licensed under the MIT License.
