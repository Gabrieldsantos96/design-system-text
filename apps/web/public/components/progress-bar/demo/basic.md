```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ProgressBarComponent } from '../progress-bar.component';

@Component({
  selector: 'b3-demo-progress-bar-basic',
  standalone: true,
  imports: [B3ProgressBarComponent],
  template: ` <b3-progress-bar [progress]="50"></b3-progress-bar> `,
})
export class B3DemoProgressBarBasicComponent {}

```