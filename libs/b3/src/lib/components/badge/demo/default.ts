import { Component } from '@angular/core';

import { B3IconComponent } from '../../icon/icon.component';
import { B3BadgeComponent } from '../badge.component';

@Component({
  selector: 'b3-demo-badge-default',
  standalone: true,
  imports: [B3BadgeComponent, B3IconComponent],
  template: `
    <div class="flex flex-col items-center gap-2">
      <div class="flex w-full flex-wrap gap-2">
        <b3-badge>Badge</b3-badge>
        <b3-badge zType="secondary">Secondary</b3-badge>
        <b3-badge zType="destructive">Destructive</b3-badge>
        <b3-badge zType="outline">Outline</b3-badge>
      </div>
      <div class="flex w-full flex-wrap gap-2">
        <b3-badge zType="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
          <b3-icon zType="badge-check"></b3-icon>
          Verified
        </b3-badge>
        <b3-badge zShape="pill" class="h-5 min-w-5 px-1 font-mono tabular-nums">8</b3-badge>
        <b3-badge zShape="pill" zType="destructive" class="h-5 min-w-5 px-1 font-mono tabular-nums">99</b3-badge>
        <b3-badge zShape="pill" zType="outline" class="h-5 min-w-5 px-1 font-mono tabular-nums">20+</b3-badge>
      </div>
    </div>
  `,
})
export class B3DemoBadgeDefaultComponent {}
