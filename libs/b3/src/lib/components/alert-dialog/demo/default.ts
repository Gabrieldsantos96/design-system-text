import { Component, inject } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'b3-demo-alert-dialog-default',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="outline" (click)="showDialog()">Show Dialog</button> `,
})
export class B3DemoAlertDialogDefaultComponent {
  private alertDialogService = inject(B3AlertDialogService);

  showDialog() {
    this.alertDialogService.confirm({
      zTitle: 'Are you absolutely sure?',
      zDescription: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      zOkText: 'Continue',
      zCancelText: 'Cancel',
    });
  }
}
