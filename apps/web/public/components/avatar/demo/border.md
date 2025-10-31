```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar [zImage]="zImageDefault" zBorder />
    <b3-avatar zType="destructive" [zImage]="zImageDefault" zBorder />
    <b3-avatar zType="outline" [zImage]="zImageDefault" zBorder />
    <b3-avatar zType="secondary" [zImage]="zImageDefault" zBorder />
    <b3-avatar zType="ghost" [zImage]="zImageDefault" zBorder />
  `,
})
export class B3DemoAvatarBorderComponent {
  readonly zImageDefault = {
    fallback: 'ZA',
    url: '/images/avatar/imgs/avatar_image.jpg',
    alt: 'ZadUI',
  };
}

```