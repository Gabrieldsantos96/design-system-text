```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3InputDirective } from '../input.directive';

@Component({
  selector: 'b3-demo-input-status',
  standalone: true,
  imports: [B3InputDirective],
  template: `
    <input b3-input zStatus="error" placeholder="Error" />
    <input b3-input zStatus="warning" placeholder="Warning" />
    <input b3-input zStatus="success" placeholder="Success" />
  `,
})
export class B3DemoInputStatusComponent {}

```