```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3DividerComponent } from '../../divider/divider.component';
import { B3RadioComponent } from '../../radio/radio.component';
import { B3TabComponent, B3TabGroupComponent, type zPosition } from '../tabs.component';

@Component({
  selector: 'b3-demo-tabs-position',
  standalone: true,
  imports: [B3TabComponent, B3TabGroupComponent, B3RadioComponent, FormsModule, B3DividerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex h-[300px] w-full flex-col justify-between">
      <b3-tab-group [zTabsPosition]="zTabsPosition" [zActivePosition]="zActivePosition" class="h-[180px]">
        <b3-tab label="First">
          <p>Is the default tab component</p>
        </b3-tab>
        <b3-tab label="Second">
          <p>Content of the second tab</p>
        </b3-tab>
        <b3-tab label="Third">
          <p>Content of the third tab</p>
        </b3-tab>
      </b3-tab-group>
      <div>
        <b3-divider class="my-0" />
        <div class="flex flex-col gap-3 px-4 py-2 text-sm">
          <div class="flex items-center justify-between">
            <span>Tabs Position:</span>
            <div class="flex gap-2">
              <span b3-radio name="tab" [(ngModel)]="zTabsPosition" value="top" zSize="sm">Top</span>
              <span b3-radio name="tab" [(ngModel)]="zTabsPosition" value="bottom" zSize="sm">Bottom</span>
              <span b3-radio name="tab" [(ngModel)]="zTabsPosition" value="left" zSize="sm">Left</span>
              <span b3-radio name="tab" [(ngModel)]="zTabsPosition" value="right" zSize="sm">Right</span>
            </div>
          </div>
          <div class="flex items-center justify-center gap-2">
            <span>Active Tab Indicator Position:</span>
            <span b3-radio name="active" [(ngModel)]="zActivePosition" value="top" zSize="sm">Top</span>
            <span b3-radio name="active" [(ngModel)]="zActivePosition" value="bottom" zSize="sm">Bottom</span>
            <span b3-radio name="active" [(ngModel)]="zActivePosition" value="left" zSize="sm">Left</span>
            <span b3-radio name="active" [(ngModel)]="zActivePosition" value="right" zSize="sm">Right</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class B3DemoTabsPositionComponent {
  protected zTabsPosition: zPosition = 'top';
  protected zActivePosition: zPosition = 'bottom';
}

```