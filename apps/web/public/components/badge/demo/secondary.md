```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3BadgeComponent } from '../badge.component';

@Component({
  standalone: true,
  imports: [B3BadgeComponent],
  template: ` <b3-badge zType="secondary">Default</b3-badge> `,
})
export class B3DemoBadgeSecondaryComponent {}

```