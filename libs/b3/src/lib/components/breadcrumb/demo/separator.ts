import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3BreadcrumbModule } from '../breadcrumb.module';

@Component({
  selector: 'b3-demo-breadcrumb-separator',
  standalone: true,
  imports: [B3BreadcrumbModule, B3IconComponent],
  template: `
    <b3-breadcrumb [zSeparator]="customSeparator">
      <b3-breadcrumb-item>Home</b3-breadcrumb-item>
      <b3-breadcrumb-item>Components</b3-breadcrumb-item>
      <b3-breadcrumb-item>Breadcrumb</b3-breadcrumb-item>
    </b3-breadcrumb>

    <ng-template #customSeparator>
      <b3-icon zType="arrow-right"></b3-icon>
    </ng-template>
  `,
})
export class B3DemoBreadcrumbSeparatorComponent {}
