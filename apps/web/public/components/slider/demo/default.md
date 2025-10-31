```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3SliderComponent } from '../slider.component';

@Component({
  selector: 'b3-demo-slider-default',
  standalone: true,
  imports: [B3SliderComponent],
  template: `
    <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
      <b3-slider [class]="'w-[60%]'" zDefault="50" />
    </div>
  `,
})
export class B3DemoSliderDefaultComponent {}

```