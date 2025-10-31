import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3RadioComponent } from '../radio.component';

@Component({
  selector: 'b3-demo-radio-disabled',
  standalone: true,
  imports: [B3RadioComponent, FormsModule],
  template: `
    <span b3-radio name="radio" [(ngModel)]="val" value="a" [disabled]="true">Disabled</span>
    <span b3-radio name="radio" [(ngModel)]="val" value="b" [disabled]="true">Disabled</span>
  `,
})
export class B3DemoRadioDisabledComponent {
  val = 'a';
}
