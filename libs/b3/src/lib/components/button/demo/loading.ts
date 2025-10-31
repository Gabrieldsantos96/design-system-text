import { Component } from '@angular/core';

import { B3ButtonComponent } from '../button.component';

@Component({
  selector: 'b3-demo-button-loading',
  standalone: true,
  imports: [B3ButtonComponent],
  template: ` <button b3-button zLoading>Default</button> `,
})
export class B3DemoButtonLoadingComponent {}
