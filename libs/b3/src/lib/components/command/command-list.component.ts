import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { commandListVariants } from './command.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-command-list',
  exportAs: 'zCommandList',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="classes()" role="listbox" id="command-list">
      <ng-content></ng-content>
    </div>
  `,
})
export class B3CommandListComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(commandListVariants({}), this.class()));
}
