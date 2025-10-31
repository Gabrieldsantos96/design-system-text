```angular-ts showLineNumbers copyButton
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { B3RadioComponent } from '../radio.component';

@Component({
  standalone: true,
  imports: [B3RadioComponent, FormsModule],
  template: `
    <div class="flex flex-col gap-3">
      <span b3-radio name="option" [(ngModel)]="selected" value="default">Default</span>
      <span b3-radio name="option" [(ngModel)]="selected" value="comfortable">Comfortable</span>
      <span b3-radio name="option" [(ngModel)]="selected" value="compact">Compact</span>
    </div>
  `,
})
export class B3DemoRadioBasicComponent {
  selected = 'default';
}

```