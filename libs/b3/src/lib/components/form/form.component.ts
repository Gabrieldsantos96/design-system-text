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
