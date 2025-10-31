```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3PopoverComponent, B3PopoverDirective } from '../popover.component';

@Component({
  selector: 'b3-popover-placement-demo',
  standalone: true,
  imports: [B3ButtonComponent, B3PopoverComponent, B3PopoverDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col space-y-2">
      <button b3-button zPopover [zContent]="popoverContent" zPlacement="top" zType="outline">Top</button>

      <div class="flex space-x-2">
        <button b3-button zPopover [zContent]="popoverContent" zPlacement="left" zType="outline">Left</button>
        <button b3-button zPopover [zContent]="popoverContent" zPlacement="right" zType="outline">Right</button>
      </div>

      <button b3-button zPopover [zContent]="popoverContent" zPlacement="bottom" zType="outline">Bottom</button>
    </div>

    <ng-template #popoverContent>
      <b3-popover>
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Popover content</h4>
          <p class="text-sm text-muted-foreground">This is the popover content.</p>
        </div>
      </b3-popover>
    </ng-template>
  `,
})
export class B3DemoPopoverPlacementComponent {}

```