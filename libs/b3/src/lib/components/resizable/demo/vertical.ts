import { Component } from '@angular/core';

import { B3ResizableHandleComponent } from '../resizable-handle.component';
import { B3ResizablePanelComponent } from '../resizable-panel.component';
import { B3ResizableComponent } from '../resizable.component';

@Component({
  selector: 'b3-demo-resizable-vertical',
  standalone: true,
  imports: [B3ResizableComponent, B3ResizablePanelComponent, B3ResizableHandleComponent],
  template: `
    <b3-resizable zLayout="vertical" class="h-[400px] w-[500px] max-w-md rounded-lg border">
      <b3-resizable-panel [zDefaultSize]="25">
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </b3-resizable-panel>
      <b3-resizable-handle [zWithHandle]="true" />
      <b3-resizable-panel [zDefaultSize]="75">
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Two</span>
        </div>
      </b3-resizable-panel>
    </b3-resizable>
  `,
})
export class B3DemoResizableVerticalComponent {}
