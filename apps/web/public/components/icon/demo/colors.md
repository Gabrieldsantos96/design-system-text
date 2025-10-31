```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../icon.component';

@Component({
  selector: 'b3-demo-icon-colors',
  standalone: true,
  imports: [B3IconComponent],
  template: `
    <div class="flex items-center gap-4">
      <b3-icon zType="heart" class="text-destructive" />
      <b3-icon zType="circle-check" class="text-green-500" />
      <b3-icon zType="triangle-alert" class="text-warning" />
      <b3-icon zType="info" class="text-blue-500" />
      <b3-icon zType="star" class="text-yellow-500" />
      <b3-icon zType="zap" class="text-purple-500" />
    </div>
  `,
})
export class B3DemoIconColorsComponent {}

```