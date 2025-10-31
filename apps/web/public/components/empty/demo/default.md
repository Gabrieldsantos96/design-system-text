```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3IconComponent } from '../../icon/icon.component';
import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-default',
  standalone: true,
  imports: [B3ButtonComponent, B3EmptyComponent, B3IconComponent],
  template: `
    <b3-empty
      zIcon="folder-code"
      zTitle="No Projects Yet"
      zDescription="You haven't created any projects yet. Get started by creating your first project."
      [zActions]="[actionPrimary, actionSecondary]"
    >
      <ng-template #actionPrimary>
        <button b3-button>Create Project</button>
      </ng-template>

      <ng-template #actionSecondary>
        <button b3-button zType="outline">Import Project</button>
      </ng-template>

      <button b3-button zType="link" zSize="sm" class="text-muted-foreground">
        Learn More
        <i b3-icon zType="arrow-up-right"></i>
      </button>
    </b3-empty>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B3DemoEmptyDefaultComponent {}

```