```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { type zAlign, B3TabComponent, B3TabGroupComponent } from '../tabs.component';

@Component({
  selector: 'b3-demo-tabs-align',
  standalone: true,
  imports: [B3TabComponent, B3TabGroupComponent, B3ButtonComponent],
  template: `
    <div class="h-[300px] w-full">
      <b3-tab-group [zAlignTabs]="zAlignTabs">
        <b3-tab label="First">
          <p class="w-full text-center">zAlignTabs: {{ zAlignTabs }}</p>
          <div class="mt-4 flex items-center justify-center gap-2">
            <button b3-button zType="ghost" (click)="zAlignTabs = 'start'">Start</button>
            <button b3-button zType="ghost" (click)="zAlignTabs = 'center'">Center</button>
            <button b3-button zType="ghost" (click)="zAlignTabs = 'end'">End</button>
          </div>
        </b3-tab>
        <b3-tab label="Second">
          <p>Content of the second tab</p>
        </b3-tab>
        <b3-tab label="Third">
          <p>Content of the third tab</p>
        </b3-tab>
      </b3-tab-group>
    </div>
  `,
})
export class B3DemoTabsAlignComponent {
  zAlignTabs: zAlign = 'start';
}

```