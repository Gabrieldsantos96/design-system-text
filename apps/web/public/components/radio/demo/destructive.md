```angular-ts showLineNumbers copyButton
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { B3RadioComponent } from '../radio.component';

@Component({
  standalone: true,
  imports: [B3RadioComponent, FormsModule],
  template: `
    <span b3-radio name="radio" zType="destructive" [(ngModel)]="val" value="a"></span>
    <span b3-radio name="radio" zType="destructive" [(ngModel)]="val" value="b">Destructive</span>
  `,
})
export class B3DemoRadioDestructiveComponent {
  val = 'b';
}

```