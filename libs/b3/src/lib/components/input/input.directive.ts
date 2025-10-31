import { computed, Directive, ElementRef, inject, input } from '@angular/core';

import type { ClassValue } from 'clsx';

import { inputVariants, type B3InputVariants } from './input.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';

@Directive({
  selector: 'input[b3-input], textarea[b3-input]',
  exportAs: 'zInput',
  standalone: true,
  host: {
    '[class]': 'classes()',
  },
})
export class B3InputDirective {
  readonly elementRef = inject(ElementRef);
  private readonly isTextarea = this.elementRef.nativeElement.tagName.toLowerCase() === 'textarea';

  readonly zBorderless = input(false, { transform });
  readonly zSize = input<B3InputVariants['zSize']>('default');
  readonly zStatus = input<B3InputVariants['zStatus']>();

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(inputVariants({ zType: !this.isTextarea ? 'default' : 'textarea', zSize: this.zSize(), zStatus: this.zStatus(), zBorderless: this.zBorderless() }), this.class()),
  );
}
