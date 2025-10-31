```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AlertComponent } from '../alert.component';

@Component({
  standalone: true,
  imports: [B3AlertComponent],
  template: `
    <b3-alert [zTitle]="title" [zDescription]="description" zType="error" zAppearance="outline" />

    <b3-alert [zTitle]="title" [zDescription]="description" zType="error" zAppearance="soft" />

    <b3-alert [zTitle]="title" [zDescription]="description" zType="error" zAppearance="fill" />
  `,
})
export class B3DemoAlertErrorComponent {
  title = 'Error alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}

```