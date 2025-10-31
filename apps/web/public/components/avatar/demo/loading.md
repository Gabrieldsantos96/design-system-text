```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AvatarComponent } from '../avatar.component';

@Component({
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <b3-avatar zLoading [zImage]="zImageDefault" />
    <b3-avatar zLoading zType="destructive" [zImage]="zImageDefault" />
    <b3-avatar zLoading zType="outline" [zImage]="zImageDefault" />
    <b3-avatar zLoading zType="secondary" [zImage]="zImageDefault" />
    <b3-avatar zLoading zType="ghost" [zImage]="zImageDefault" />
  `,
})
export class B3DemoAvatarLoadingComponent {
  readonly zImageDefault = {
    fallback: 'ZA',
    url: '/images/avatar/imgs/avatar_image.jpg',
    alt: 'ZadUI',
  };
}

```