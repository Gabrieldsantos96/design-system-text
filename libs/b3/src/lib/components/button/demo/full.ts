import { Component } from '@angular/core';

import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-full',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zFull>Default</button> `,
})
export class B3DemoButtonFullComponent {}
