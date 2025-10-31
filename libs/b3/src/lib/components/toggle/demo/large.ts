import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ToggleComponent } from '../toggle.component';

@Component({
  selector: 'b3-demo-toggle-large',
  standalone: true,
  imports: [B3ToggleComponent, B3IconComponent],
  template: `
    <b3-toggle aria-label="Toggle large" zSize="lg">
      <b3-icon zType="bold" />
    </b3-toggle>
  `,
})
export class B3DemoToggleLargeComponent {}
