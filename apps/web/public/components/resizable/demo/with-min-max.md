```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ResizableHandleComponent } from '../resizable-handle.component';
import { B3ResizablePanelComponent } from '../resizable-panel.component';
import { B3ResizableComponent } from '../resizable.component';

@Component({
  selector: 'b3-demo-resizable-with-min-max',
  standalone: true,
  imports: [B3ResizableComponent, B3ResizablePanelComponent, B3ResizableHandleComponent],
  template: `
    <div class="space-y-4">
      <b3-resizable class="max-w-md w-[500px] rounded-lg border">
        <b3-resizable-panel [zDefaultSize]="25" zMin="0" zMax="40%">
          <div class="flex h-[200px] items-center justify-center p-6">
            <span class="font-semibold">One</span>
          </div>
        </b3-resizable-panel>
        <b3-resizable-handle zWithHandle />
        <b3-resizable-panel [zDefaultSize]="75" [zMin]="'100px'">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Two</span>
          </div>
        </b3-resizable-panel>
      </b3-resizable>
    </div>
  `,
})
export class B3DemoResizableWithMinMaxComponent {}

```