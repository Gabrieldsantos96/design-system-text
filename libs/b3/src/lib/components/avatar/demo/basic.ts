import { Component } from '@angular/core';

import { B3AvatarGroupComponent } from '../avatar-group.component';
import { B3AvatarComponent } from '../avatar.component';

@Component({
  selector: 'b3-demo-avatar-basic',
  standalone: true,
  imports: [B3AvatarComponent, B3AvatarGroupComponent],
  template: `
    <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zFallback="ZA" [zSize]="32" />
    <b3-avatar zSrc="error-image.png" zFallback="ZA" zSize="sm" />

    <b3-avatar-group>
      <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zFallback="JD" zSize="sm" />
      <b3-avatar zSrc="https://github.com/srizzon.png" zFallback="SA" zSize="sm" />
      <b3-avatar zSrc="https://github.com/Luizgomess.png" zFallback="LU" zSize="sm" />
    </b3-avatar-group>
  `,
})
export class B3DemoAvatarBasicComponent {}
