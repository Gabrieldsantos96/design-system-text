import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-custom-description',
  standalone: true,
  imports: [B3EmptyComponent],
  template: `<b3-empty zDescription="No data found" />`,
})
export class B3DemoEmptyCustomDescriptionComponent {}
