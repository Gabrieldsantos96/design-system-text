```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3SwitchComponent } from '../switch.component';

@Component({
  selector: 'b3-demo-switch-destructive',
  standalone: true,
  imports: [B3SwitchComponent],
  template: ` <b3-switch zType="destructive" /> `,
})
export class B3DemoSwitchDestructiveComponent {}

```