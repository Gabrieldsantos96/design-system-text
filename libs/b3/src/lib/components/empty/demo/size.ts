import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-size',
  standalone: true,
  imports: [B3EmptyComponent],
  template: `
    <b3-empty zSize="sm" zDescription="small" />
    <b3-empty zDescription="default" />
    <b3-empty zSize="lg" zDescription="large" />
  `,
})
export class B3DemoEmptySizeComponent {}
