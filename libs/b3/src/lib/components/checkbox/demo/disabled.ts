import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'b3-demo-checkbox-disabled',
  standalone: true,
  imports: [B3CheckboxComponent, FormsModule],
  template: `
    <span b3-checkbox disabled>Disabled</span>
    <span b3-checkbox disabled [(ngModel)]="checked">Disabled</span>
  `,
})
export class B3DemoCheckboxDisabledComponent {
  checked = true;
}
