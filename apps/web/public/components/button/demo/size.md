```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-size',
  standalone: true,
  imports: [B3ButtonComponent, B3IconComponent],
  template: `
    <div class="flex flex-col items-center">
      <div class="mb-4 flex gap-2">
        <button b3-button zSize="sm">Small</button>
        <button b3-button zSize="sm"><b3-icon zType="arrow-up"></b3-icon></button>
      </div>

      <div class="mb-4 flex gap-2">
        <button b3-button>Default</button>
        <button b3-button><b3-icon zType="arrow-up"></b3-icon></button>
      </div>

      <div class="mb-4 flex gap-2">
        <button b3-button zSize="lg">Large</button>
        <button b3-button zSize="lg"><b3-icon zType="arrow-up"></b3-icon></button>
      </div>
    </div>
  `,
})
export class B3DemoButtonSizeComponent {}

```