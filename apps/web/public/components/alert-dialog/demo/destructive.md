```angular-ts showLineNumbers
import { Component, inject } from '@angular/core';

import { B3ButtonComponent } from '../../components';
import { B3AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'zard-demo-alert-dialog-destructive',
  standalone: true,
  imports: [B3ButtonComponent],
  template: `
    <button b3-button zType="destructive" (click)="showDestructiveAlert()">
      Delete Item
    </button>
  `,
})
export class B3DemoAlertDialogDestructiveComponent {
  private alertDialogService = inject(B3AlertDialogService);

  showDestructiveAlert() {
    const alertRef = this.alertDialogService.confirm({
      zTitle: 'Delete Item',
      zDescription: 'Are you sure you want to delete this item? This action cannot be undone.',
      zIcon: 'trash-2',
      zOkText: 'Delete',
      zCancelText: 'Cancel',
      zOkDestructive: true,
    });

    alertRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item deleted');
      }
    });
  }
}
```
