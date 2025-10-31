```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ToggleComponent } from '../toggle.component';

@Component({
  selector: 'b3-demo-toggle-with-text',
  standalone: true,
  imports: [B3ToggleComponent, B3IconComponent],
  template: `
    <b3-toggle>
      <b3-icon zType="italic" />
      Italic
    </b3-toggle>
  `,
})
export class B3DemoToggleWithTextComponent {}

```