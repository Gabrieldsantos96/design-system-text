import { Component, input } from '@angular/core';

import { B3AvatarComponent } from '@b3/components/avatar/avatar.component';
import { B3TooltipModule } from '@b3/components/tooltip/tooltip';

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

@Component({
  selector: 'b3-contributors',
  standalone: true,
  imports: [B3AvatarComponent, B3TooltipModule],
  template: `
    <div class="flex flex-wrap gap-4">
      @for (contributor of contributors(); track contributor.login) {
        <div class="relative" [zTooltip]="contributor.login" zPosition="top" zTrigger="hover">
          <a [href]="contributor.html_url" target="_blank" rel="noopener noreferrer" class="block transition-transform hover:scale-110">
            <b3-avatar
              [zSrc]="contributor.avatar_url"
              [zAlt]="contributor.login + ' avatar'"
              [zFallback]="contributor.login.substring(0, 2).toUpperCase()"
              zSize="md"
              zShape="rounded"
              class="ring-2 ring-background hover:ring-primary/20 transition-all"
            ></b3-avatar>
          </a>
        </div>
      }
    </div>
  `,
})
export class ContributorsComponent {
  readonly contributors = input.required<Contributor[]>();
}
