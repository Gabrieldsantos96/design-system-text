import { Component } from '@angular/core';

import { B3SwitchComponent } from '../switch.component';

@Component({
  selector: 'b3-demo-switch-size',
  standalone: true,
  imports: [B3SwitchComponent],
  template: `
    <b3-switch zSize="sm">Small</b3-switch>
    <b3-switch>Default</b3-switch>
    <b3-switch zSize="lg">Large</b3-switch>
  `,
})
export class B3DemoSwitchSizeComponent {}
