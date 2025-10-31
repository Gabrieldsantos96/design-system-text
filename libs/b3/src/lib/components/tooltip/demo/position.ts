import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3TooltipModule } from '../tooltip';

@Component({
  selector: 'b3-demo-tooltip-position',
  standalone: true,
  imports: [B3ButtonComponent, B3TooltipModule],
  template: `
    <div class="flex flex-col space-y-2">
      <button b3-button zType="outline" zTooltip="Tooltip content" zPosition="top">Top</button>

      <div class="flex space-x-2">
        <button b3-button zType="outline" zTooltip="Tooltip content" zPosition="left">Left</button>
        <button b3-button zType="outline" zTooltip="Tooltip content" zPosition="right">Right</button>
      </div>

      <button b3-button zType="outline" zTooltip="Tooltip content" zPosition="bottom">Bottom</button>
    </div>
  `,
})
export class B3DemoTooltipPositionComponent {}
