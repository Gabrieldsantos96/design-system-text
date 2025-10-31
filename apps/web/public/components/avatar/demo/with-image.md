```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  selector: 'zard-demo-avatar-with-image',
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar [zImage]="zImageDefault" />
    <b3-avatar zType="destructive" [zImage]="zImageDefault" />
    <b3-avatar zType="outline" [zImage]="zImageDefault" />
    <b3-avatar zType="secondary" [zImage]="zImageDefault" />
    <b3-avatar zType="ghost" [zImage]="zImageDefault" />
  `,
})
export class B3DemoAvatarWithImageComponent {
  readonly zImageDefault = {
    fallback: 'ZA',
    url: '/images/avatar/imgs/avatar_image.jpg',
    alt: 'ZadUI',
  };
}

```