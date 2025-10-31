import { Component } from '@angular/core';

import { B3InputDirective } from '../input.directive';

@Component({
  selector: 'b3-demo-input-default',
  standalone: true,
  imports: [B3InputDirective],
  template: `
    <input b3-input placeholder="Default" />
    <input b3-input disabled placeholder="Disabled" />
  `,
})
export class B3DemoInputDefaultComponent {}
