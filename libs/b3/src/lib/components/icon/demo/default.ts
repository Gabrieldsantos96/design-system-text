import { Component } from '@angular/core';

import { B3IconComponent } from '../icon.component';

@Component({
  selector: 'b3-demo-icon-default',
  standalone: true,
  imports: [B3IconComponent],
  template: `
    <div class="flex items-center gap-4">
      <b3-icon zType="house" />
      <b3-icon zType="settings" />
      <b3-icon zType="user" />
      <b3-icon zType="search" />
      <b3-icon zType="bell" />
      <b3-icon zType="mail" />
    </div>
  `,
})
export class B3DemoIconDefaultComponent {}
