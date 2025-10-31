import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { SIDEBAR_PATHS } from '@b3/shared/constants/routes.constant';

@Component({
  selector: 'b3-sidebar',
  template: `
    <aside class="w-[var(--sidebar-width)] max-h-[calc(100vh-5rem)] bg-transparent hidden flex-col lg:flex shrink-0">
      <nav class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto no-scrollbar">
        @for (doc of sidebarPaths; track $index) {
          <div class="relative flex w-full min-w-0 flex-col p-2">
            <ul class="flex w-full min-w-0 flex-col gap-0.5">
              <h1 class="flex shrink-0 items-center h-8 px-2 text-[0.8rem] outline-hidden text-muted-foreground font-medium">{{ doc.title }}</h1>
              @for (path of doc.data; track $index) {
                <li class="relative">
                  <a
                    b3-button
                    zSize="sm"
                    zType="ghost"
                    zFull
                    [routerLink]="path.path"
                    class="justify-between px-2 py-1 font-normal max-w-48"
                    routerLinkActive="bg-accent font-semibold text-primary-foreground"
                    [routerLinkActiveOptions]="{ exact: true }"
                  >
                    {{ path.name }}
                    @if (!path.available) {
                      <b3-badge zType="secondary" class="px-1 py-0">soon</b3-badge>
                    }
                  </a>
                </li>
              }
            </ul>
          </div>
        }
      </nav>
    </aside>
  `,
  host: {
    class: 'b3-30 sticky top-20',
  },
  standalone: true,
  imports: [RouterModule, B3ButtonComponent, B3BadgeComponent],
})
export class SidebarComponent {
  readonly sidebarPaths = SIDEBAR_PATHS;
}
