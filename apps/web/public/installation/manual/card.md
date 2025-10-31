

```angular-ts title="card.component.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import type { ClassValue } from 'clsx';

import { ChangeDetectionStrategy, Component, computed, input, type TemplateRef, ViewEncapsulation } from '@angular/core';

import { mergeClasses } from '../../shared/utils/utils';
import { B3StringTemplateOutletDirective } from '../core/directives/string-template-outlet/string-template-outlet.directive';
import { cardBodyVariants, cardHeaderVariants, cardVariants } from './card.variants';

@Component({
  selector: 'b3-card',
  exportAs: 'zCard',
  standalone: true,
  imports: [B3StringTemplateOutletDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (zTitle()) {
      <div [class]="headerClasses()">
        <div class="text-2xl font-semibold leading-none tracking-tight">
          <ng-container *zStringTemplateOutlet="zTitle()">{{ zTitle() }}</ng-container>
        </div>

        @if (zDescription()) {
          <div class="text-sm text-muted-foreground">
            <ng-container *zStringTemplateOutlet="zDescription()">{{ zDescription() }}</ng-container>
          </div>
        }
      </div>
    }

    <div [class]="bodyClasses()">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    '[class]': 'classes()',
  },
})
export class B3CardComponent {
  readonly zTitle = input<string | TemplateRef<void>>();
  readonly zDescription = input<string | TemplateRef<void>>();

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(cardVariants(), this.class()));
  protected readonly headerClasses = computed(() => mergeClasses(cardHeaderVariants()));
  protected readonly bodyClasses = computed(() => mergeClasses(cardBodyVariants()));
}

```



```angular-ts title="card.variants.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva('block rounded-lg border bg-card text-card-foreground shadow-sm w-full p-6', {
  variants: {},
});
export type B3CardVariants = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = cva('flex flex-col space-y-1.5 pb-0 gap-1.5', {
  variants: {},
});
export type B3CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;

export const cardBodyVariants = cva('block mt-6', {
  variants: {},
});
export type B3CardBodyVariants = VariantProps<typeof cardBodyVariants>;

```



```angular-ts title="index.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
export * from './card.component';

```

