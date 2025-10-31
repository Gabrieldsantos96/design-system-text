import { Component } from '@angular/core';

import { B3SliderComponent } from '../slider.component';

@Component({
  selector: 'b3-demo-slider-vertical',
  standalone: true,
  imports: [B3SliderComponent],
  template: `
    <div class="preview flex h-[350px] w-full justify-center p-10 items-center">
      <b3-slider [class]="'w-[60%]'" zDefault="100" zMin="30" zMax="120" zOrientation="vertical" />
    </div>
  `,
})
export class B3DemoSliderVerticalComponent {}
