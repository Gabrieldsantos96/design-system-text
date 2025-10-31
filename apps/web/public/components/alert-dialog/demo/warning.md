```angular-ts showLineNumbers
import { Component, inject } from '@angular/core';

import { B3ButtonComponent } from '../../components';
import { B3AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'zard-demo-alert-dialog-warning',
  standalone: true,
  imports: [B3ButtonComponent],
  template: `
    <button b3-button zType="outline" (click)="showWarning()">
      Show Warning
    </button>
  `,
})
export class B3DemoAlertDialogWarningComponent {
  private alertDialogService = inject(B3AlertDialogService);

  showWarning() {
    this.alertDialogService.warning({
      zTitle: 'Warning',
      zDescription: 'This operation might have unexpected consequences. Please proceed with caution.',
      zOkText: 'I understand',
    });
  }
}
```
