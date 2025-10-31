```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'b3-demo-checkbox-default',
  standalone: true,
  imports: [B3CheckboxComponent, FormsModule],
  template: `
    <span b3-checkbox></span>
    <span b3-checkbox [(ngModel)]="checked">Default Checked</span>
  `,
})
export class B3DemoCheckboxDefaultComponent {
  checked = true;
}

```