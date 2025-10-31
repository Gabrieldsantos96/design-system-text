import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ToggleComponent } from '../toggle.component';

@Component({
  selector: 'b3-demo-toggle-disabled',
  standalone: true,
  imports: [B3ToggleComponent, B3IconComponent],
  template: `
    <b3-toggle aria-label="Toggle disabled" disabled>
      <b3-icon zType="bold" />
    </b3-toggle>
  `,
})
export class B3DemoToggleDisabledComponent {}
