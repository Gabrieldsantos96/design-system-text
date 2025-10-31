import { Component } from '@angular/core';

import { B3ResizableHandleComponent } from '../resizable-handle.component';
import { B3ResizablePanelComponent } from '../resizable-panel.component';
import { B3ResizableComponent } from '../resizable.component';

@Component({
  selector: 'b3-demo-resizable-default',
  standalone: true,
  imports: [B3ResizableComponent, B3ResizablePanelComponent, B3ResizableHandleComponent],
  template: `
    <b3-resizable class="max-w-md w-[500px] h-[200px] rounded-lg border">
      <b3-resizable-panel>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </b3-resizable-panel>
      <b3-resizable-handle />
      <b3-resizable-panel>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Two</span>
        </div>
      </b3-resizable-panel>
    </b3-resizable>
  `,
})
export class B3DemoResizableDefaultComponent {}
