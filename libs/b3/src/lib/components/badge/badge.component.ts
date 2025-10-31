import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { badgeVariants, type B3BadgeVariants } from './badge.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-badge',
  exportAs: 'zBadge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
  },
})
export class B3BadgeComponent {
  readonly zType = input<B3BadgeVariants['zType']>('default');
  readonly zShape = input<B3BadgeVariants['zShape']>('default');

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(badgeVariants({ zType: this.zType(), zShape: this.zShape() }), this.class()));
}
