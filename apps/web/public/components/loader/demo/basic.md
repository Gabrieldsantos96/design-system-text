```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3LoaderComponent } from '../loader.component';

@Component({
  selector: 'b3-demo-loader-basic',
  standalone: true,
  imports: [B3LoaderComponent],
  template: `<b3-loader />`,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
      }
    `,
  ],
})
export class B3DemoLoaderBasicComponent {}

```