```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3InputDirective } from '../input.directive';

@Component({
  selector: 'b3-demo-input-borderless',
  standalone: true,
  imports: [B3InputDirective],
  template: `<input b3-input zBorderless placeholder="Borderless" />`,
})
export class B3DemoInputBorderlessComponent {}

```