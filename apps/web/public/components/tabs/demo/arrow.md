```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3TabComponent, B3TabGroupComponent } from '../tabs.component';

@Component({
  selector: 'b3-demo-tabs-arrow',
  standalone: true,
  imports: [B3TabComponent, B3TabGroupComponent, B3ButtonComponent],
  template: `
    <div class="h-[300px] w-full">
      <div class="mb-4 text-sm">
        <div class="mt-4 flex items-center justify-center gap-2">
          <button b3-button zType="ghost" type="button" [attr.aria-pressed]="showArrow" (click)="showArrow = !showArrow">{{ showArrow ? 'Hide' : 'Show' }} Arrows</button>
        </div>
      </div>
      <b3-tab-group [zShowArrow]="showArrow">
        <b3-tab label="First">
          <p>Is the default tab component</p>
        </b3-tab>
        <b3-tab label="Second">
          <p>Content of the second tab</p>
        </b3-tab>
        <b3-tab label="Third">
          <p>Content of the third tab</p>
        </b3-tab>
        <b3-tab label="Fourth">
          <p>Content of the fourth tab</p>
        </b3-tab>
        <b3-tab label="Fifth">
          <p>Content of the fifth tab</p>
        </b3-tab>
        <b3-tab label="Sixth">
          <p>Content of the sixth tab</p>
        </b3-tab>
        <b3-tab label="Seventh">
          <p>Content of the seventh tab</p>
        </b3-tab>
        <b3-tab label="Eighth">
          <p>Content of the eighth tab</p>
        </b3-tab>
        <b3-tab label="Ninth">
          <p>Content of the ninth tab</p>
        </b3-tab>
        <b3-tab label="Tenth">
          <p>Content of the tenth tab</p>
        </b3-tab>
      </b3-tab-group>
    </div>
  `,
})
export class B3DemoTabsArrowComponent {
  showArrow = true;
}

```