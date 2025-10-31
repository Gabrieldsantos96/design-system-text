```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-custom-image',
  standalone: true,
  imports: [B3EmptyComponent],
  template: `<b3-empty zImage="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />`,
})
export class B3DemoEmptyCustomImageComponent {}

```