```angular-ts showLineNumbers
import { Component, inject } from '@angular/core';

import { B3ButtonComponent } from '../../components';
import { B3AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'zard-demo-alert-dialog-info',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="secondary" (click)="showInfo()">Show Info</button> `,
})
export class B3DemoAlertDialogInfoComponent {
  private alertDialogService = inject(B3AlertDialogService);

  showInfo() {
    this.alertDialogService.info({
      zTitle: 'Information',
      zDescription: 'Your changes have been saved successfully. You can continue working on your project.',
      zOkText: 'Got it',
    });
  }
}

```
