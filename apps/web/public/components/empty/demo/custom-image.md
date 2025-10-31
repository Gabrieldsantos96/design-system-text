```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-custom-image',
  standalone: true,
  imports: [B3ButtonComponent, B3EmptyComponent],
  template: `
    <b3-empty
      zImage="images/avatar/imgs/avatar_image.jpg"
      zTitle="User Offline"
      zDescription="This user is currently offline. You can leave a message to notify them or try again later."
      [zActions]="[actionPrimary]"
      class="[&_img]:size-12 [&_img]:rounded-full [&_img]:grayscale"
    />

    <ng-template #actionPrimary>
      <button b3-button>Leave Message</button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B3DemoEmptyCustomImageComponent {}

```