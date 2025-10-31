import { Component } from '@angular/core';

import { B3SwitchComponent } from '../switch.component';

@Component({
  selector: 'b3-demo-switch',
  standalone: true,
  imports: [B3SwitchComponent],
  template: ` <b3-switch /> `,
})
export class B3DemoSwitchDefaultComponent {}
