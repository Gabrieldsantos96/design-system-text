```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3MenuModule } from '../menu.module';

@Component({
  selector: 'zard-demo-menu-horizontal',
  standalone: true,
  imports: [B3MenuModule],
  template: `
    <ul b3-menu zMode="horizontal">
      <li b3-menu-item (click)="navigate('home')">Home</li>
      <li b3-menu-item (click)="navigate('about')">About</li>
      <li b3-submenu zTitle="Products" zIcon="package">
        <ul>
          <li b3-menu-item (click)="navigate('product-a')">Product A</li>
          <li b3-menu-item (click)="navigate('product-b')">Product B</li>
          <li b3-menu-item (click)="navigate('product-c')">Product C</li>
        </ul>
      </li>
      <li b3-submenu zTitle="Services" zIcon="settings">
        <ul>
          <li b3-menu-item (click)="navigate('consulting')">Consulting</li>
          <li b3-menu-item (click)="navigate('support')">Support</li>
          <li b3-menu-item (click)="navigate('training')">Training</li>
        </ul>
      </li>
      <li b3-menu-divider></li>
      <li b3-menu-item (click)="navigate('contact')">Contact</li>
    </ul>
  `,
})
export class B3DemoMenuHorizontalComponent {
  navigate(route: string) {
    console.log('Navigate to:', route);
  }
}

```