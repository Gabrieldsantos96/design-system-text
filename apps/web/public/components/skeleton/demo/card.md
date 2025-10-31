```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3SkeletonComponent } from '../skeleton.component';

@Component({
  selector: 'b3-demo-skeleton-card',
  standalone: true,
  imports: [B3SkeletonComponent],
  template: `
    <div class="flex flex-col space-y-3">
      <b3-skeleton class="rounded-xll h-[125px] w-[250px]" />
      <div class="space-y-2">
        <b3-skeleton class="h-4 w-[250px]" />
        <b3-skeleton class="h-4 w-[200px]" />
      </div>
    </div>
  `,
})
export class B3DemoSkeletonCardComponent {}

```