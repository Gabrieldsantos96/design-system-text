```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { toast } from 'ngx-sonner';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'b3-demo-toast-loading',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="outline" (click)="showToast()">Show Loading Toast</button> `,
})
export class B3DemoToastLoadingComponent {
  showToast() {
    const promise = () => new Promise(resolve => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    toast.promise(promise, {
      loading: 'Loading...',
      success: (data: any) => {
        return `${data.name} has been created`;
      },
      error: 'Error',
    });
  }
}

```