```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-without-description',
  standalone: true,
  imports: [B3EmptyComponent],
  template: `<b3-empty zDescription="" />`,
})
export class B3DemoEmptyWithoutDescriptionComponent {}

```