```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'b3-demo-checkbox-destructive',
  standalone: true,
  imports: [B3CheckboxComponent, FormsModule],
  template: `
    <span b3-checkbox zType="destructive"></span>
    <span b3-checkbox zType="destructive" [(ngModel)]="checked">Destructive Checked</span>
  `,
})
export class B3DemoCheckboxDestructiveComponent {
  checked = true;
}

```