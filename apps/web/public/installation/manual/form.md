

```angular-ts title="form.component.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { formFieldVariants, formControlVariants, formLabelVariants, formMessageVariants, type B3FormMessageVariants } from './form.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';

@Component({
  selector: 'b3-form-field, [b3-form-field]',
  exportAs: 'zFormField',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  host: {
    '[class]': 'classes()',
  },
})
export class B3FormFieldComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(formFieldVariants(), this.class()));
}

@Component({
  selector: 'b3-form-control, [b3-form-control]',
  exportAs: 'zFormControl',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="relative">
      <ng-content></ng-content>
    </div>
    @if (errorMessage() || helpText()) {
      <div class="mt-1.5 min-h-[1.25rem]">
        @if (errorMessage()) {
          <p class="text-sm text-red-500">{{ errorMessage() }}</p>
        } @else if (helpText()) {
          <p class="text-sm text-muted-foreground">{{ helpText() }}</p>
        }
      </div>
    }
  `,
  host: {
    '[class]': 'classes()',
  },
})
export class B3FormControlComponent {
  readonly class = input<ClassValue>('');
  readonly errorMessage = input<string>('');
  readonly helpText = input<string>('');

  protected readonly classes = computed(() => mergeClasses(formControlVariants(), this.class()));
}

@Component({
  selector: 'b3-form-label, label[b3-form-label]',
  exportAs: 'zFormLabel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  host: {
    '[class]': 'classes()',
  },
})
export class B3FormLabelComponent {
  readonly class = input<ClassValue>('');
  readonly zRequired = input(false, { transform });

  protected readonly classes = computed(() => mergeClasses(formLabelVariants({ zRequired: this.zRequired() }), this.class()));
}

@Component({
  selector: 'b3-form-message, [b3-form-message]',
  exportAs: 'zFormMessage',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  host: {
    '[class]': 'classes()',
  },
})
export class B3FormMessageComponent {
  readonly class = input<ClassValue>('');
  readonly zType = input<B3FormMessageVariants['zType']>('default');

  protected readonly classes = computed(() => mergeClasses(formMessageVariants({ zType: this.zType() }), this.class()));
}

```



```angular-ts title="form.variants.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { cva, type VariantProps } from 'class-variance-authority';

export const formFieldVariants = cva('grid gap-2');

export const formLabelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
  variants: {
    zRequired: {
      true: "after:content-['*'] after:ml-0.5 after:text-red-500",
    },
  },
});

export const formControlVariants = cva('');

export const formMessageVariants = cva('text-sm', {
  variants: {
    zType: {
      default: 'text-muted-foreground',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
  },
  defaultVariants: {
    zType: 'default',
  },
});

export type B3FormFieldVariants = VariantProps<typeof formFieldVariants>;
export type B3FormLabelVariants = VariantProps<typeof formLabelVariants>;
export type B3FormControlVariants = VariantProps<typeof formControlVariants>;
export type B3FormMessageVariants = VariantProps<typeof formMessageVariants>;

```



```angular-ts title="form.module.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { NgModule } from '@angular/core';

import { B3FormControlComponent, B3FormFieldComponent, B3FormLabelComponent, B3FormMessageComponent } from './form.component';

const FORM_COMPONENTS = [B3FormFieldComponent, B3FormLabelComponent, B3FormControlComponent, B3FormMessageComponent];

@NgModule({
  imports: [...FORM_COMPONENTS],
  exports: [...FORM_COMPONENTS],
})
export class B3FormModule {}

```

