```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3PopoverComponent, B3PopoverDirective } from '../popover.component';

@Component({
  selector: 'b3-popover-hover-demo',
  standalone: true,
  imports: [B3ButtonComponent, B3PopoverComponent, B3PopoverDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button b3-button zPopover [zContent]="popoverContent" zTrigger="hover" zType="outline">Hover me</button>

    <ng-template #popoverContent>
      <b3-popover>
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Hover content</h4>
          <p class="text-sm text-muted-foreground">This popover appears when you hover over the button.</p>
        </div>
      </b3-popover>
    </ng-template>
  `,
})
export class B3DemoPopoverHoverComponent {}

```