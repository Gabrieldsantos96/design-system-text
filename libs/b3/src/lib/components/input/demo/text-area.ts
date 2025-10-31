import { Component } from '@angular/core';

import { B3InputDirective } from '../input.directive';

@Component({
  selector: 'b3-demo-input-text-area',
  standalone: true,
  imports: [B3InputDirective],
  template: `
    <textarea b3-input rows="8" cols="12" placeholder="Default"></textarea>
    <textarea zBorderless b3-input rows="8" cols="12" placeholder="Borderless"></textarea>
  `,
})
export class B3DemoInputTextAreaComponent {}
