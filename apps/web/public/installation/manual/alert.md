

```angular-ts title="alert.component.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { ChangeDetectionStrategy, Component, computed, input, TemplateRef, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { alertDescriptionVariants, alertIconVariants, alertTitleVariants, alertVariants, type B3AlertVariants } from './alert.variants';
import { mergeClasses } from '../../shared/utils/utils';
import { B3StringTemplateOutletDirective } from '../core/directives/string-template-outlet/string-template-outlet.directive';
import { B3IconComponent } from '../icon/icon.component';
import type { B3Icon } from '../icon/icons';

@Component({
  selector: 'b3-alert, [b3-alert]',
  standalone: true,
  exportAs: 'zAlert',
  imports: [B3IconComponent, B3StringTemplateOutletDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (zIcon() || iconName()) {
      <span [class]="iconClasses()" data-slot="alert-icon">
        <ng-container *zStringTemplateOutlet="zIcon()">
          <b3-icon [zType]="iconName()!" />
        </ng-container>
      </span>
    }

    <div class="flex-1">
      @if (zTitle()) {
        <div [class]="titleClasses()" data-slot="alert-title">
          <ng-container *zStringTemplateOutlet="zTitle()">{{ zTitle() }}</ng-container>
        </div>
      }

      @if (zDescription()) {
        <div [class]="descriptionClasses()" data-slot="alert-description">
          <ng-container *zStringTemplateOutlet="zDescription()">{{ zDescription() }}</ng-container>
        </div>
      }
    </div>
  `,
  host: {
    role: 'alert',
    '[class]': 'classes()',
    '[attr.data-slot]': '"alert"',
  },
})
export class B3AlertComponent {
  readonly class = input<ClassValue>('');
  readonly zTitle = input<string | TemplateRef<void>>('');
  readonly zDescription = input<string | TemplateRef<void>>('');
  readonly zIcon = input<B3Icon | TemplateRef<void>>();
  readonly zType = input<B3AlertVariants['zType']>('default');

  protected readonly classes = computed(() => mergeClasses(alertVariants({ zType: this.zType() }), this.class()));

  protected readonly iconClasses = computed(() => alertIconVariants());

  protected readonly titleClasses = computed(() => alertTitleVariants());

  protected readonly descriptionClasses = computed(() => alertDescriptionVariants({ zType: this.zType() }));

  protected readonly iconName = computed((): B3Icon | null => {
    const customIcon = this.zIcon();
    if (customIcon && !(customIcon instanceof TemplateRef)) {
      return customIcon;
    }

    if (this.zType() === 'destructive') return 'circle-alert';

    return null;
  });
}

```



```angular-ts title="alert.variants.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva('relative w-full rounded-lg border px-4 py-3 text-sm flex items-center gap-3', {
  variants: {
    zType: {
      default: 'bg-card text-card-foreground',
      destructive: 'text-destructive bg-card',
    },
  },
  defaultVariants: {
    zType: 'default',
  },
});

export const alertIconVariants = cva('shrink-0 self-start !text-base');

export const alertTitleVariants = cva('font-medium tracking-tight leading-none');

export const alertDescriptionVariants = cva('text-sm leading-relaxed mt-1', {
  variants: {
    zType: {
      default: 'text-muted-foreground',
      destructive: 'text-destructive/90',
    },
  },
  defaultVariants: {
    zType: 'default',
  },
});

export type B3AlertVariants = VariantProps<typeof alertVariants>;
export type B3AlertIconVariants = VariantProps<typeof alertIconVariants>;
export type B3AlertTitleVariants = VariantProps<typeof alertTitleVariants>;
export type B3AlertDescriptionVariants = VariantProps<typeof alertDescriptionVariants>;

```

