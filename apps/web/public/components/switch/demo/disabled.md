```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { B3SwitchComponent } from '../switch.component';

@Component({
  selector: 'b3-demo-switch-disabled',
  standalone: true,
  imports: [B3SwitchComponent, FormsModule, ReactiveFormsModule],
  template: `
    <b3-switch [(ngModel)]="model" disabled>Disabled</b3-switch>
    <b3-switch [formControl]="checkControl">Disabled in forms</b3-switch>
  `,
})
export class B3DemoSwitchDisabledComponent {
  model = false;
  checkControl = new FormControl({ value: true, disabled: true });
}

```