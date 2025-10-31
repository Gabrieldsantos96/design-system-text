```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AlertComponent } from '../alert.component';

@Component({
  standalone: true,
  imports: [B3AlertComponent],
  template: `
    <b3-alert [zTitle]="title" [zDescription]="description" zType="warning" zAppearance="outline" />

    <b3-alert [zTitle]="title" [zDescription]="description" zType="warning" zAppearance="soft" />

    <b3-alert [zTitle]="title" [zDescription]="description" zType="warning" zAppearance="fill" />
  `,
})
export class B3DemoAlertWarningComponent {
  title = 'Warning alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}

```