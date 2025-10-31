```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'zard-demo-toast-destructive',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="outline" (click)="showToast()">Show Error Toast</button> `,
})
export class B3DemoToastDestructiveComponent {
  showToast() {
    toast.error('Something went wrong', {
      description: 'There was a problem with your request.',
    });
  }
}

```