```angular-ts showLineNumbers copyButton
import { toast } from 'ngx-sonner';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'zard-demo-toast-position',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [B3ButtonComponent],
  template: `
    <div class="flex flex-wrap gap-2">
      <b3-button zType="outline" (click)="showToast('top-left')"> Top Left </b3-button>

      <b3-button zType="outline" (click)="showToast('top-center')"> Top Center </b3-button>

      <b3-button zType="outline" (click)="showToast('top-right')"> Top Right </b3-button>

      <b3-button zType="outline" (click)="showToast('bottom-left')"> Bottom Left </b3-button>

      <b3-button zType="outline" (click)="showToast('bottom-center')"> Bottom Center </b3-button>

      <b3-button zType="outline" (click)="showToast('bottom-right')"> Bottom Right </b3-button>
    </div>
  `,
})
export class B3DemoToastPositionComponent {
  currentPosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' = 'bottom-right';

  showToast(position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right') {
    this.currentPosition = position;

    toast(`Toast at ${position.replace('-', ' ')}`, {
      action: {
        label: 'Close',
        onClick: () => console.log('Toast closed'),
      },
      position: position,
    });
  }
}

```