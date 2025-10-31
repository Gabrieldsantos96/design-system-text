```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-default',
  standalone: true,
  imports: [B3ButtonComponent, B3IconComponent],
  template: `
    <button b3-button zType="outline">Button</button>
    <button b3-button zType="outline"><i b3-icon zType="arrow-up"></i></button>
    <button b3-button zType="outline">Button <i b3-icon zType="popcorn"></i></button>
  `,
})
export class B3DemoButtonDefaultComponent {}

```