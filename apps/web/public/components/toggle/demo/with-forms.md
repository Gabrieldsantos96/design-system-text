```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3IconComponent } from '../../icon/icon.component';
import { B3ToggleComponent } from '../toggle.component';

@Component({
  selector: 'b3-demo-toggle-with-forms',
  standalone: true,
  imports: [B3ToggleComponent, FormsModule, B3IconComponent],
  template: `
    <b3-toggle aria-label="Turn on the light" [(ngModel)]="lightOn">
      @if (lightOn) {
        <b3-icon zType="lightbulb" />
      } @else {
        <b3-icon zType="lightbulb-off" />
      }
    </b3-toggle>
  `,
})
export class B3DemoToggleWithFormsComponent {
  protected lightOn = false;
}

```