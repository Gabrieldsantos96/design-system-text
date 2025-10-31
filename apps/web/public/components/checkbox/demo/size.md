```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'b3-demo-checkbox-size',
  standalone: true,
  imports: [B3CheckboxComponent, FormsModule],
  template: `
    <span b3-checkbox>Default</span>
    <span b3-checkbox zSize="lg" [(ngModel)]="checked">Large</span>
  `,
})
export class B3DemoCheckboxSizeComponent {
  checked = true;
}

```