```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3AlertComponent } from '../alert.component';

@Component({
  selector: 'b3-demo-alert-basic',
  standalone: true,
  imports: [B3AlertComponent, B3IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid w-full max-w-xl items-start gap-4">
      <b3-alert zIcon="circle-check" zTitle="Success! Your changes have been saved" zDescription="This is an alert with icon, title and description." />

      <b3-alert [zIcon]="customIcon" zTitle="This Alert has a title and an icon. No description." />

      <ng-template #customIcon>
        <b3-icon zType="popcorn" />
      </ng-template>

      <b3-alert zType="destructive" zTitle="Unable to process your payment." [zDescription]="customDescription" />

      <ng-template #customDescription>
        <p>Please verify your billing information and try again.</p>
        <ul class="list-disc pl-5">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </ng-template>
    </div>
  `,
})
export class B3DemoAlertBasicComponent {}

```