```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3InputDirective } from '../input.directive';

@Component({
  selector: 'b3-demo-input-size',
  standalone: true,
  imports: [B3InputDirective],
  template: `
    <input b3-input zSize="sm" placeholder="small size" />
    <input b3-input zSize="default" placeholder="default size" />
    <input b3-input zSize="lg" placeholder="large size" />
  `,
})
export class B3DemoInputSizeComponent {}

```