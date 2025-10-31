import { Component } from '@angular/core';

import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-link',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zType="link">Link</button> `,
})
export class B3DemoButtonLinkComponent {}
