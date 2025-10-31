import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3InputDirective } from '../../input/input.directive';
import { B3InputGroupComponent } from '../input-group.component';

@Component({
  selector: 'b3-demo-input-group-size',
  standalone: true,
  imports: [B3InputGroupComponent, B3InputDirective, FormsModule],
  template: `
    <div class="flex flex-col space-y-4">
      <b3-input-group zSize="sm" zAddOnBefore="@" zAddOnAfter=".com" class="mb-4">
        <input b3-input placeholder="Small" [(ngModel)]="smallValue" />
      </b3-input-group>

      <b3-input-group zSize="default" zAddOnBefore="@" zAddOnAfter=".com" class="mb-4">
        <input b3-input placeholder="Default" [(ngModel)]="defaultValue" />
      </b3-input-group>

      <b3-input-group zSize="lg" zAddOnBefore="@" zAddOnAfter=".com">
        <input b3-input placeholder="Large" [(ngModel)]="largeValue" />
      </b3-input-group>
    </div>
  `,
})
export class B3DemoInputGroupSizeComponent {
  smallValue = '';
  defaultValue = '';
  largeValue = '';
}
