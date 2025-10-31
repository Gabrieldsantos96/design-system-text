```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3MenuModule } from '../../menu/menu.module';
import { B3BreadcrumbModule } from '../breadcrumb.module';

@Component({
  selector: 'b3-demo-breadcrumb-ellipsis',
  standalone: true,
  imports: [B3BreadcrumbModule, B3MenuModule],
  template: `
    <b3-breadcrumb>
      <b3-breadcrumb-item [routerLink]="['/']">Home</b3-breadcrumb-item>
      <b3-breadcrumb-item>
        <b3-breadcrumb-ellipsis b3-menu [zMenuTriggerFor]="ellipsisMenu" />

        <ng-template #ellipsisMenu>
          <div b3-menu-content class="w-48">
            <button b3-menu-item>Getting Started</button>
            <button b3-menu-item>Installation</button>
          </div>
        </ng-template>
      </b3-breadcrumb-item>
      <b3-breadcrumb-item>Components</b3-breadcrumb-item>
      <b3-breadcrumb-item>Breadcrumb</b3-breadcrumb-item>
    </b3-breadcrumb>
  `,
})
export class B3DemoBreadcrumbEllipsisComponent {}

```