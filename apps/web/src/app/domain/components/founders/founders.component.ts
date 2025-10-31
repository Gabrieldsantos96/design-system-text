import { Component, input } from '@angular/core';

import { B3AvatarComponent } from '@b3/components/avatar/avatar.component';

import { SOCIAL_MEDIAS } from '../../../shared/constants/medias.constant';

export interface FounderData {
  login: string;
  name: string;
  role: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

@Component({
  selector: 'b3-founders',
  standalone: true,
  imports: [B3AvatarComponent],
  template: `
    <div class="flex flex-col gap-6">
      @for (founder of founders(); track founder.login) {
        <div class="rounded-lg border bg-card p-6 sm:p-8 text-card-foreground shadow-sm">
          <div class="flex items-start gap-6">
            <b3-avatar
              [zSrc]="founder.avatar_url"
              [zAlt]="founder.name + ' avatar'"
              [zFallback]="founder.name.substring(0, 2).toUpperCase()"
              zSize="lg"
              class="shrink-0"
            ></b3-avatar>

            <div class="flex flex-col gap-3">
              <div>
                <h3 class="text-lg font-semibold">{{ founder.name }}</h3>
                <p class="text-sm text-muted-foreground">{{ founder.role }}</p>
              </div>
              <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
                <a [href]="founder.html_url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <img [src]="githubData?.icon" [alt]="githubData?.iconAlt" class="h-4 dark:invert" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class FoundersComponent {
  readonly founders = input.required<FounderData[]>();
  readonly githubData = SOCIAL_MEDIAS.find(media => media.name === 'GitHub');
}
