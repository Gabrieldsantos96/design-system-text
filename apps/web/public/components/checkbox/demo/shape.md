```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'b3-demo-checkbox-shape',
  standalone: true,
  imports: [B3CheckboxComponent, FormsModule],
  template: `
    <span b3-checkbox zShape="circle" [(ngModel)]="checked">Cicle</span>
    <span b3-checkbox zShape="square" [(ngModel)]="checked">Square</span>
  `,
})
export class B3DemoCheckboxShapeComponent {
  checked = true;
}

```