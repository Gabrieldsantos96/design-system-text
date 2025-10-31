import { Component } from '@angular/core';

import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-type',
  standalone: true,
  imports: [B3ButtonComponent],
  template: `
    <button b3-button zSize="sm">Default</button>
    <button b3-button zSize="sm" zType="outline">Outline</button>
    <button b3-button zSize="sm" zType="destructive">Destructive</button>
    <button b3-button zSize="sm" zType="secondary">Secondary</button>
    <button b3-button zSize="sm" zType="ghost">Ghost</button>
    <button b3-button zSize="sm" zType="link">Link</button>
  `,
  host: {
    class: 'flex flex-col items-center gap-4 md:flex-row md:gap-8',
  },
})
export class B3DemoButtonTypeComponent {}
