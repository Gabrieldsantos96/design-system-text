import { Component } from '@angular/core';

import { toast } from 'ngx-sonner';

import { B3ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'b3-demo-toast-success',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="outline" (click)="showToast()">Show Success Toast</button> `,
})
export class B3DemoToastSuccessComponent {
  showToast() {
    toast.success('Event created successfully', {
      description: 'Your event has been saved and will start soon.',
    });
  }
}
