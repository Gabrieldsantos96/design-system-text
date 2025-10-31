import { Component } from '@angular/core';

import { B3SwitchComponent } from '../switch.component';

@Component({
  selector: 'b3-demo-switch-basic',
  standalone: true,
  imports: [B3SwitchComponent],
  template: `
    <b3-switch />
    <b3-switch zType="destructive">Destructive</b3-switch>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
      }
    `,
  ],
})
export class B3DemoSwitchBasicComponent {}
