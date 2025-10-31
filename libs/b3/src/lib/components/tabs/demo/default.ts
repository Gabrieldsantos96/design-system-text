import { Component } from '@angular/core';

import { B3TabComponent, B3TabGroupComponent } from '../tabs.component';

@Component({
  selector: 'b3-demo-tabs-default',
  standalone: true,
  imports: [B3TabComponent, B3TabGroupComponent],
  template: `
    <div class="w-full h-[300px]">
      <b3-tab-group>
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
      </b3-tab-group>
    </div>
  `,
})
export class B3DemoTabsDefaultComponent {}
