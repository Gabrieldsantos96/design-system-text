```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3TooltipModule } from '../tooltip';

@Component({
  selector: 'b3-demo-tooltip-hover',
  standalone: true,
  imports: [B3ButtonComponent, B3TooltipModule],
  template: ` <button b3-button zType="outline" zTooltip="Tooltip content">Hover</button> `,
})
export class B3DemoTooltipHoverComponent {}

```