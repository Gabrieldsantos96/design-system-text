import { Component } from '@angular/core';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3Icon } from '@b3/components/icon/icons';

interface OpenSourceFeature {
  title: string;
  description: string;
  icon: B3Icon;
}

interface StandAgainstItem {
  title: string;
  description: string;
}

@Component({
  selector: 'open-source-section',
  standalone: true,
  imports: [B3BadgeComponent, B3CardComponent, B3IconComponent],
  template: `
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex items-start md:items-center flex-col-reverse md:flex-row gap-3">
          <h2 class="text-3xl font-bold tracking-tight">Open Source Philosophy</h2>
          <b3-badge class="text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400">100% Free</b3-badge>
        </div>
        <p class="text-base leading-7 text-muted-foreground">Built by the community, for the community. No corporate overlords, no paywalls, no compromises.</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        @for (feature of features; track $index) {
          <b3-card [zTitle]="title">
            <ng-template #title>
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <b3-icon [zType]="feature.icon" class="text-lg font-normal" />
              </div>
              <h3 class="mt-4 text-base font-semibold">{{ feature.title }}</h3>
            </ng-template>
            <p class="mt-2 text-sm text-muted-foreground">{{ feature.description }}</p>
          </b3-card>
        }
      </div>

      <!-- What We Stand Against -->
      <div class="rounded-lg bg-destructive/5 p-6">
        <h3 class="mb-4 text-lg font-semibold flex items-center gap-2">
          <b3-icon zType="ban" class="text-destructive" />
          What We Stand Against
        </h3>
        <div class="grid gap-3 md:grid-cols-3">
          @for (item of standAgainstItems; track $index) {
            <div class="flex items-start gap-3">
              <b3-icon zType="x" class="text-destructive" />
              <div>
                <p class="font-medium text-sm">{{ item.title }}</p>
                <p class="text-xs text-muted-foreground">{{ item.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class OpenSourceSection {
  readonly features: OpenSourceFeature[] = [
    {
      title: 'Community Owned',
      description: "Governed by developers, not corporations. Every decision is made transparently with the community's best interests at heart.",
      icon: 'circle-check',
    },
    {
      title: 'Forever Free',
      description: 'Every component, every feature, always free. No premium tiers, no hidden costs, no "pro" versions.',
      icon: 'circle-dollar-sign',
    },
    {
      title: 'Built in Public',
      description: 'All development happens in the open. Watch us build, contribute your ideas, and shape the future together.',
      icon: 'zap',
    },
  ];

  readonly standAgainstItems: StandAgainstItem[] = [
    {
      title: 'Corporate Control',
      description: 'No single entity will ever own or control B3UI',
    },
    {
      title: 'Vendor Lock-in',
      description: 'Your code is yours, take it wherever you need',
    },
    {
      title: 'Artificial Limitations',
      description: 'No paywalls or "premium" features',
    },
  ];
}
