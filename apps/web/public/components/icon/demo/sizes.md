```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../icon.component';

@Component({
  selector: 'b3-demo-icon-sizes',
  standalone: true,
  imports: [B3IconComponent],
  template: `
    <div class="flex items-center gap-6">
      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" zSize="sm" />
        <span class="text-muted-foreground text-xs">Small</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" zSize="default" />
        <span class="text-muted-foreground text-xs">Default</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" zSize="lg" />
        <span class="text-muted-foreground text-xs">Large</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" zSize="xl" />
        <span class="text-muted-foreground text-xs">Extra Large</span>
      </div>
    </div>
  `,
})
export class B3DemoIconSizesComponent {}

```