```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3RadioComponent } from '../radio.component';

@Component({
  standalone: true,
  imports: [B3RadioComponent, FormsModule],
  template: `
    <span name="radio-size" b3-radio zSize="sm" [(ngModel)]="val" value="small">Small</span>
    <span name="radio-size" b3-radio [(ngModel)]="val" value="default">Default</span>
    <span name="radio-size" b3-radio zSize="lg" [(ngModel)]="val" value="large">Large</span>
  `,
})
export class B3DemoRadioSizeComponent {
  val = 'large';
}

```