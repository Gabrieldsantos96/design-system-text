```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3MenuModule } from '../menu.module';

@Component({
  selector: 'zard-demo-menu-vertical',
  standalone: true,
  imports: [B3MenuModule],
  template: `
    <div style="width: 256px;">
      <ul b3-menu zMode="vertical" zTheme="light">
        <li b3-menu-item>Dashboard</li>
        <ul b3-submenu zTitle="User Management">
          <li b3-menu-item>Users</li>
          <li b3-menu-item>Roles</li>
          <li b3-menu-item>Permissions</li>
        </ul>
        <ul b3-submenu zTitle="Content">
          <li b3-menu-item>Articles</li>
          <li b3-menu-item>Media</li>
          <li b3-menu-item>Categories</li>
        </ul>
        <li b3-menu-item>Analytics</li>
        <li b3-menu-item>Settings</li>
      </ul>
    </div>
  `,
})
export class B3DemoMenuVerticalComponent {}

```