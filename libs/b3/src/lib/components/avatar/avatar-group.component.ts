import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { avatarGroupVariants, B3AvatarGroupVariants } from './avatar.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-avatar-group',
  exportAs: 'zAvatarGroup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
  },
})
export class B3AvatarGroupComponent {
  readonly zOrientation = input<B3AvatarGroupVariants['zOrientation']>('horizontal');
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(avatarGroupVariants({ zOrientation: this.zOrientation() }), this.class()));
}
