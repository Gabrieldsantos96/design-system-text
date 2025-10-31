import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3PopoverComponent, B3PopoverDirective } from '../popover.component';

@Component({
  selector: 'b3-popover-default-demo',
  standalone: true,
  imports: [B3ButtonComponent, B3PopoverComponent, B3PopoverDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button b3-button zPopover [zContent]="popoverContent" zType="outline">Open popover</button>

    <ng-template #popoverContent>
      <b3-popover>
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
      </b3-popover>
    </ng-template>
  `,
})
export class B3DemoPopoverDefaultComponent {}
