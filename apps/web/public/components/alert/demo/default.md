```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AlertComponent } from '../alert.component';

@Component({
  standalone: true,
  imports: [B3AlertComponent],
  template: `
    <b3-alert [zTitle]="title" [zDescription]="description" zAppearance="outline" />

    <b3-alert [zTitle]="title" [zDescription]="description" zAppearance="soft" />

    <b3-alert [zTitle]="title" [zDescription]="description" zAppearance="fill" />
  `,
})
export class B3DemoAlertDefaultComponent {
  title = 'Default alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}

```