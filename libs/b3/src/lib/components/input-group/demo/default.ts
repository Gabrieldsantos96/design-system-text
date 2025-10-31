import { Component } from '@angular/core';

import { B3InputDirective } from '../../input/input.directive';
import { B3InputGroupComponent } from '../input-group.component';

@Component({
  selector: 'b3-demo-input-group-default',
  standalone: true,
  imports: [B3InputGroupComponent, B3InputDirective],
  template: `
    <div class="flex flex-col space-y-4">
      <b3-input-group zAddOnBefore="https://" zAddOnAfter=".com" class="mb-4">
        <input b3-input placeholder="example" />
      </b3-input-group>

      <b3-input-group zPrefix="$" zSuffix="USD" class="mb-4">
        <input b3-input placeholder="0.00" type="number" />
      </b3-input-group>

      <b3-input-group zAddOnBefore="@">
        <input b3-input placeholder="username" />
      </b3-input-group>
    </div>
  `,
})
export class B3DemoInputGroupDefaultComponent {}
