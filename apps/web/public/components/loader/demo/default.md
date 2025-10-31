```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3LoaderComponent } from '../loader.component';

@Component({
  selector: 'b3-demo-loader-default',
  standalone: true,
  imports: [B3LoaderComponent],
  template: `<b3-loader />`,
})
export class B3DemoLoaderDefaultComponent {}

```