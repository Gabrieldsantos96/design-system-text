import { Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { dropdownShortcutVariants } from './dropdown.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-dropdown-menu-shortcut, [b3-dropdown-menu-shortcut]',
  exportAs: 'zDropdownMenuShortcut',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'classes()',
  },
})
export class B3DropdownMenuShortcutComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(dropdownShortcutVariants(), this.class()));
}
