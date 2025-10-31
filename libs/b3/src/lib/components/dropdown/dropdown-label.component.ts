import { Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { dropdownLabelVariants } from './dropdown.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';

@Component({
  selector: 'b3-dropdown-menu-label, [b3-dropdown-menu-label]',
  exportAs: 'zDropdownMenuLabel',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'classes()',
    '[attr.data-inset]': 'inset() || null',
  },
})
export class B3DropdownMenuLabelComponent {
  readonly inset = input(false, { transform });
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(
      dropdownLabelVariants({
        inset: this.inset(),
      }),
      this.class(),
    ),
  );
}
