import { Component } from '@angular/core';

import { B3CardComponent } from '@b3/components/card/card.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3Icon } from '@b3/components/icon/icons';

interface FeatureCard {
  title: string;
  description: string;
  icon: B3Icon;
}

@Component({
  selector: 'why-zardui-section',
  standalone: true,
  imports: [B3CardComponent, B3IconComponent],
  template: `
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold tracking-tight">Why B3UI?</h2>
        <p class="text-base leading-7 text-muted-foreground">Finally, a component library that doesn't force you to choose between beauty and functionality.</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        @for (card of cards; track $index) {
          <b3-card [zTitle]="title">
            <ng-template #title>
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                <b3-icon [zType]="card.icon" class="text-primary" />
              </div>
            </ng-template>
            <h3 class="mt-4 text-lg font-semibold">{{ card.title }}</h3>
            <p class="mt-2 text-sm text-muted-foreground">{{ card.description }}</p>
          </b3-card>
        }
      </div>
    </section>
  `,
})
export class WhyB3UISection {
  readonly cards: FeatureCard[] = [
    {
      title: 'Beautiful & Practical',
      description: 'Meticulously crafted components that look stunning out of the box while remaining highly functional and accessible.',
      icon: 'sparkles',
    },
    {
      title: 'Community First',
      description: 'Built by Angular developers who understand your needs. Real-world solutions to real problems.',
      icon: 'users',
    },
    {
      title: 'Modern Angular',
      description: 'Leveraging the latest Angular features including standalone components, signals, and best practices.',
      icon: 'zap',
    },
    {
      title: 'Infinitely Customizable',
      description: 'Built with TailwindCSS for seamless customization. Make every component truly yours.',
      icon: 'layers-2',
    },
  ];
}
