import { Component } from '@angular/core';

import { B3DividerComponent } from '../divider.component';

@Component({
  selector: 'b3-demo-divider-vertical',
  standalone: true,
  imports: [B3DividerComponent],
  template: `
    <div class="h-20 flex">
      <p>Left</p>
      <b3-divider zOrientation="vertical"></b3-divider>
      <p>Right</p>
    </div>
  `,
})
export class B3DemoDividerVerticalComponent {}
