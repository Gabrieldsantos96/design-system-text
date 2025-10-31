import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-default',
  standalone: true,
  imports: [B3EmptyComponent],
  template: `<b3-empty />`,
})
export class B3DemoEmptyDefaultComponent {}
