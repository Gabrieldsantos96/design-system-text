```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3BreadcrumbModule } from '../breadcrumb.module';

@Component({
  selector: 'b3-demo-breadcrumb-default',
  standalone: true,
  imports: [B3BreadcrumbModule, B3IconComponent],
  template: `
    <b3-breadcrumb zWrap="wrap" zAlign="start">
      <b3-breadcrumb-item [routerLink]="['/']">
        <b3-icon zType="house"></b3-icon>
        Home
      </b3-breadcrumb-item>
      <b3-breadcrumb-item [routerLink]="['/docs/components']">Components</b3-breadcrumb-item>
      <b3-breadcrumb-item>Breadcrumb</b3-breadcrumb-item>
    </b3-breadcrumb>
  `,
})
export class B3DemoBreadcrumbDefaultComponent {}

```