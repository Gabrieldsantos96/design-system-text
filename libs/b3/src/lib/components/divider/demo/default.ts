import { Component } from '@angular/core';

import { B3DividerComponent } from '../divider.component';

@Component({
  selector: 'b3-demo-divider-default',
  standalone: true,
  imports: [B3DividerComponent],
  template: `
    <div class="flex flex-col">
      <p>Before divider</p>
      <b3-divider></b3-divider>
      <p>After divider</p>
    </div>
  `,
})
export class B3DemoDividerDefaultComponent {}
