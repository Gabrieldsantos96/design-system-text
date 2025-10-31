```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  selector: 'b3-demo-avatar-status',
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" />
    <b3-avatar zStatus="online" zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" />
    <b3-avatar zStatus="offline" zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" />
    <b3-avatar zStatus="doNotDisturb" zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" />
    <b3-avatar zStatus="away" zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" />
  `,
})
export class B3DemoAvatarStatusComponent {}

```