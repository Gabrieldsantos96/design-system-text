import { Component } from '@angular/core';

import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-shape',
  standalone: true,
  imports: [B3ButtonComponent],
  template: `
    <button b3-button>Default</button>
    <button b3-button zShape="circle">Circle</button>
    <button b3-button zShape="square">Square</button>
  `,
})
export class B3DemoButtonShapeComponent {}
