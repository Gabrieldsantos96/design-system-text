```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';
import { B3AvatarGroupComponent } from '../avatar-group.component';

@Component({
  standalone: true,
  imports: [B3AvatarComponent, B3AvatarGroupComponent],
  template: `
    <b3-avatar-group>
      <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zFallback="JD" />
      <b3-avatar zSrc="/images/avatar/imgs/avatar_image_2.jpg" zFallback="AB" />
      <b3-avatar zSrc="/images/avatar/imgs/avatar_image_3.jpg" zFallback="CD" />
      <b3-avatar zFallback="EF" />
    </b3-avatar-group>
  `,
})
export class B3DemoAvatarGroupComponent {}

```