```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" zSize="sm" />
    <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" zSize="md" />
    <b3-avatar zSrc="/images/avatar/imgs/avatar_image.jpg" zAlt="Image" zSize="lg" />
  `,
})
export class B3DemoAvatarSizeComponent {}

```