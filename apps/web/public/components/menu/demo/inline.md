```angular-ts showLineNumbers copyButton
import { Component, signal } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3MenuModule } from '../menu.module';

@Component({
  selector: 'zard-demo-menu-inline',
  standalone: true,
  imports: [B3MenuModule, B3ButtonComponent],
  template: `
    <div style="width: 256px;">
      <button b3-button zType="outline" (click)="toggleCollapsed()" class="mb-4">
        {{ collapsed() ? 'Expand' : 'Collapse' }}
      </button>

      <ul b3-menu zMode="inline" [zInlineCollapsed]="collapsed()">
        <li b3-menu-item zKey="1" zIcon="mail">Navigation One</li>
        <li b3-menu-item zKey="2" zIcon="calendar">Navigation Two</li>
        <ul b3-submenu zKey="sub1" zTitle="Navigation Three" zIcon="folder">
          <li b3-menu-item zKey="3">Option 3</li>
          <li b3-menu-item zKey="4">Option 4</li>
          <ul b3-submenu zKey="sub1-2" zTitle="Submenu">
            <li b3-menu-item zKey="5">Option 5</li>
            <li b3-menu-item zKey="6">Option 6</li>
          </ul>
        </ul>
        <ul b3-submenu zKey="sub2" zTitle="Navigation Four" zIcon="settings">
          <li b3-menu-item zKey="7">Option 7</li>
          <li b3-menu-item zKey="8">Option 8</li>
          <li b3-menu-item zKey="9">Option 9</li>
          <li b3-menu-item zKey="10">Option 10</li>
        </ul>
      </ul>
    </div>
  `,
})
export class B3DemoMenuInlineComponent {
  collapsed = signal(false);

  toggleCollapsed() {
    this.collapsed.update(val => !val);
  }
}

```