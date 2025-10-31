import { Component } from '@angular/core';

import { B3SliderComponent } from '../slider.component';

@Component({
  selector: 'b3-demo-slider-min-max',
  standalone: true,
  imports: [B3SliderComponent],
  template: `
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <b3-slider [class]="'w-[60%]'" zStep="10" zMin="30" zMax="120" />
    </div>
  `,
})
export class B3DemoSliderMinMaxComponent {}
