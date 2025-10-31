```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { toast } from 'ngx-sonner';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'b3-demo-toast-advanced',
  standalone: true,
  imports: [B3ButtonComponent],
  template: `
    <div class="flex gap-2 flex-wrap">
      <button b3-button zType="outline" (click)="showWithAction()">With Action</button>
      <button b3-button zType="outline" (click)="showCustomDuration()">Custom Duration</button>
    </div>
  `,
})
export class B3DemoToastAdvancedComponent {
  showWithAction() {
    toast('Event created', {
      description: 'Your event has been saved successfully.',
      action: {
        label: 'View',
        onClick: () => console.log('View clicked'),
      },
    });
  }

  showCustomDuration() {
    toast('This toast lasts 8 seconds', {
      description: 'Custom duration example.',
      duration: 8000,
    });
  }
}

```