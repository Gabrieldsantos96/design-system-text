```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3LoaderComponent } from '../loader.component';

@Component({
  selector: 'b3-demo-loader-size',
  standalone: true,
  imports: [B3LoaderComponent],
  template: `
    <b3-loader zSize="sm" />
    <b3-loader zSize="default" />
    <b3-loader zSize="lg" />
  `,
})
export class B3DemoLoaderSizeComponent {}

```