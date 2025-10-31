```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ToggleComponent } from '../toggle.component';

@Component({
  selector: 'b3-demo-toggle-default',
  standalone: true,
  imports: [B3ToggleComponent, B3IconComponent],
  template: `
    <b3-toggle aria-label="Default toggle">
      <b3-icon zType="bold" />
    </b3-toggle>
  `,
})
export class B3DemoToggleDefaultComponent {}

```