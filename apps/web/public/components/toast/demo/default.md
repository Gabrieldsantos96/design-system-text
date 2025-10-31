```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'zard-demo-toast',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="outline" (click)="showToast()">Show Toast</button> `,
})
export class B3DemoToastDefaultComponent {
  showToast() {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  }
}

```