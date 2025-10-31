```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-actions',
  standalone: true,
  imports: [B3ButtonComponent, B3EmptyComponent],
  template: `
    <b3-empty zIcon="inbox" zTitle="No messages" zDescription="You don't have any messages yet" [zActions]="[actionPrimary, actionSecondary]"> </b3-empty>

    <ng-template #actionPrimary>
      <button b3-button>New Message</button>
    </ng-template>

    <ng-template #actionSecondary>
      <button b3-button zType="outline">View Archived</button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B3DemoEmptyActionsComponent {}

```