import { Component } from '@angular/core';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3Icon } from '@b3/components/icon/icons';

interface AIFeatureCard {
  title: string;
  description: string;
  icon: B3Icon;
}

@Component({
  selector: 'ai-ready-section',
  standalone: true,
  imports: [B3BadgeComponent, B3CardComponent, B3IconComponent],
  template: `
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <h2 class="text-3xl font-bold tracking-tight">AI Ready</h2>
          <b3-badge zType="secondary">Future Ready</b3-badge>
        </div>
        <p class="text-base leading-7 text-muted-foreground">
          B3UI components are designed with AI development in mind. Clear patterns, consistent APIs, and comprehensive documentation make it easy for AI tools to understand and
          work with our components.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        @for (card of cards; track $index) {
          <b3-card [zTitle]="title">
            <ng-template #title>
              <div class="flex items-center gap-2">
                <b3-icon [zType]="card.icon" class="text-lg font-normal" />
                <h3 class="text-base">{{ card.title }}</h3>
              </div>
            </ng-template>
            <p class="text-base leading-7 text-muted-foreground">{{ card.description }}</p>
          </b3-card>
        }
      </div>
    </section>
  `,
})
export class AIReadySection {
  readonly cards: AIFeatureCard[] = [
    {
      title: 'Predictable Patterns',
      description: 'Consistent naming conventions, standardized props, and logical component hierarchies that AI can easily understand and generate code for.',
      icon: 'sun',
    },
    {
      title: 'Rich Documentation',
      description: 'Comprehensive examples, clear API references, and usage patterns that provide AI tools with the context they need to generate accurate code.',
      icon: 'book-open-text',
    },
  ];
}
