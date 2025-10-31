import { Component, computed, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { B3DropdownService } from './dropdown.service';
import { dropdownItemVariants, type B3DropdownItemVariants } from './dropdown.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';

@Component({
  selector: 'b3-dropdown-menu-item, [b3-dropdown-menu-item]',
  exportAs: 'zDropdownMenuItem',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'classes()',
    '[attr.data-disabled]': 'disabled() || null',
    '[attr.data-variant]': 'variant()',
    '[attr.data-inset]': 'inset() || null',
    '[attr.aria-disabled]': 'disabled()',
    role: 'menuitem',
    tabindex: '-1',
  },
})
export class B3DropdownMenuItemComponent {
  private readonly dropdownService = inject(B3DropdownService);

  readonly variant = input<B3DropdownItemVariants['variant']>('default');
  readonly inset = input(false, { transform });
  readonly disabled = input(false, { transform });
  readonly class = input<ClassValue>('');

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Fechar dropdown após click
    setTimeout(() => {
      this.dropdownService.close();
    }, 0);
  }

  protected readonly classes = computed(() =>
    mergeClasses(
      dropdownItemVariants({
        variant: this.variant(),
        inset: this.inset(),
      }),
      this.class(),
    ),
  );
}
