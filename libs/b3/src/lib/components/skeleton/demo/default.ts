import { Component } from '@angular/core';

import { B3SkeletonComponent } from '../skeleton.component';

@Component({
  selector: 'b3-demo-skeleton-default',
  standalone: true,
  imports: [B3SkeletonComponent],
  template: `
    <div class="flex items-center space-x-4">
      <b3-skeleton class="h-12 w-12 rounded-full" />
      <div class="space-y-2">
        <b3-skeleton class="h-4 w-[250px]" />
        <b3-skeleton class="h-4 w-[200px]" />
      </div>
    </div>
  `,
})
export class B3DemoSkeletonDefaultComponent {}
