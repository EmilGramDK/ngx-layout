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
     "node_modules/@emilgramdk/ngx-layout/lib/assets/primeng_theme.css" // if using primeng
   ]
   ```

2. **Add to App Component**: Add the layout to your root component.

   ```html
   <ngx-layout
     [loading]="appService.isLoading || !authService.token"
     [renderApp]="!appService.initialLoading && authService.token"
   >
   </ngx-layout>
   ```

3. **Available Props**: You can pass these props to the layout.

   ```html
   <ngx-layout
      loading="boolean"                     Shows a loader
      renderApp="boolean"                   Tell the layout to wait for a state before rendering the app
      logo="string"                         Path to logo
      title="string"                        Title in the Topbar
      subTitle="string"                     Subtitle in the Topbar
      showTopbar="boolean"                  Hide the topbar
      sidebarFooter="SidebarFooter"         Pass this to show a footer in the sidebar. {title: string; subTitle: string}
      sidebarFooterOnClick="function"       Footer onClick function
   </ngx-layout>
   ```

4. **Topbar buttons**: You can add custom buttons to the Topbar with ng-template
   ```html
   <ngx-layout>
     <ng-template #topbar> Topbar Button </ng-template>
   </ngx-layout>
   ```

## License

This project is licensed under the MIT License.
