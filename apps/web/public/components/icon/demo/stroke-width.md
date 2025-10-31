```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../icon.component';

@Component({
  selector: 'b3-demo-icon-stroke-width',
  standalone: true,
  imports: [B3IconComponent],
  template: `
    <div class="flex items-center gap-6">
      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" [zStrokeWidth]="1" />
        <span class="text-muted-foreground text-xs">Stroke 1</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" [zStrokeWidth]="2" />
        <span class="text-muted-foreground text-xs">Stroke 2</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" [zStrokeWidth]="3" />
        <span class="text-muted-foreground text-xs">Stroke 3</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <b3-icon zType="house" [zStrokeWidth]="4" />
        <span class="text-muted-foreground text-xs">Stroke 4</span>
      </div>
    </div>
  `,
})
export class B3DemoIconStrokeWidthComponent {}

```