```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3AvatarGroupComponent } from '../../avatar/avatar-group.component';
import { B3AvatarComponent } from '../../avatar/avatar.component';
import { B3ButtonComponent } from '../../button/button.component';
import { B3IconComponent } from '../../icon/icon.component';
import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-advanced-customization',
  standalone: true,
  imports: [B3AvatarComponent, B3AvatarGroupComponent, B3ButtonComponent, B3IconComponent, B3EmptyComponent],
  template: `
    <b3-empty [zImage]="customImage" [zTitle]="customTitle" zDescription="Invite your team to collaborate on this project." [zActions]="[actionInvite]"> </b3-empty>

    <ng-template #customImage>
      <b3-avatar-group>
        <b3-avatar zSrc="https://github.com/srizzon.png" zSize="md" class="grayscale" />
        <b3-avatar zSrc="https://github.com/Luizgomess.png" zSize="md" class="grayscale" />
        <b3-avatar zSrc="https://github.com/ribeiromatheuss.png" zSize="md" class="grayscale" />
        <b3-avatar zSrc="https://github.com/mikij.png" zSize="md" class="grayscale" />
      </b3-avatar-group>
    </ng-template>

    <ng-template #customTitle>
      <span>No Team <strong>members</strong></span>
    </ng-template>

    <ng-template #actionInvite>
      <button b3-button zSize="sm">
        <i b3-icon zType="plus"></i>
        Invite Members
      </button>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B3DemoEmptyAdvancedComponent {}

```