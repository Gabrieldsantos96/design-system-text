```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-custom-style',
  standalone: true,
  imports: [B3EmptyComponent],
  template: ` <b3-empty class="rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]" /> `,
})
export class B3DemoEmptyCustomStyleComponent {}

```