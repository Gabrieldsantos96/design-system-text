```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar zShape="default" [zImage]="zImageDefault" />
    <b3-avatar zShape="square" [zImage]="zImageDefault" />
    <b3-avatar zShape="circle" [zImage]="zImageDefault" />
  `,
})
export class B3DemoAvatarShapeComponent {
  readonly zImageDefault = {
    fallback: 'ZA',
    url: '/images/avatar/imgs/avatar_image.jpg',
    alt: 'ZadUI',
  };
}

```