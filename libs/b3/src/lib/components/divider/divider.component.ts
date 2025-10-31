import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { dividerVariants, type B3DividerVariants } from './divider.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-divider',
  standalone: true,
  exportAs: 'zDivider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '',
  host: {
    '[attr.role]': `'separator'`,
    '[attr.aria-orientation]': 'zOrientation()',
    '[class]': 'classes()',
  },
})
export class B3DividerComponent {
  readonly zOrientation = input<B3DividerVariants['zOrientation']>('horizontal');
  readonly zSpacing = input<B3DividerVariants['zSpacing']>('default');
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(
      dividerVariants({
        zOrientation: this.zOrientation(),
        zSpacing: this.zSpacing(),
      }),
      this.class(),
    ),
  );
}
