import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal, type TemplateRef, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { sidebarGroupLabelVariants, sidebarGroupVariants, sidebarTriggerVariants, sidebarVariants } from './layout.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';
import { B3StringTemplateOutletDirective } from '../core/directives/string-template-outlet/string-template-outlet.directive';
import { B3IconComponent } from '../icon/icon.component';
import type { B3Icon } from '../icon/icons';

@Component({
  selector: 'b3-sidebar',
  exportAs: 'zSidebar',
  standalone: true,
  imports: [B3StringTemplateOutletDirective, B3IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <aside [class]="classes()" [style.width.px]="currentWidth()" [attr.data-collapsed]="zCollapsed()">
      <div class="flex-1 overflow-auto">
        <ng-content></ng-content>
      </div>

      @if (zCollapsible() && !zTrigger()) {
        <div
          [class]="triggerClasses()"
          (click)="toggleCollapsed()"
          (keydown.enter)="toggleCollapsed(); $event.preventDefault()"
          (keydown.space)="toggleCollapsed(); $event.preventDefault()"
          tabindex="0"
          role="button"
          [attr.aria-label]="zCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          [attr.aria-expanded]="!zCollapsed()"
        >
          <b3-icon [zType]="chevronIcon()" />
        </div>
      }

      @if (zCollapsible() && zTrigger()) {
        <ng-container *zStringTemplateOutlet="zTrigger()"></ng-container>
      }
    </aside>
  `,
})
export class SidebarComponent {
  readonly zWidth = input<string | number>(200);
  readonly zCollapsedWidth = input<number>(64);
  readonly zCollapsible = input(false, { transform });
  readonly zCollapsed = input(false, { transform });
  readonly zReverseArrow = input(false, { transform });
  readonly zTrigger = input<TemplateRef<void> | null>(null);
  readonly class = input<ClassValue>('');

  readonly zCollapsedChange = output<boolean>();

  private readonly internalCollapsed = signal(false);

  constructor() {
    effect(() => {
      this.internalCollapsed.set(this.zCollapsed());
    });
  }

  protected readonly currentWidth = computed(() => {
    const collapsed = this.zCollapsed();
    if (collapsed) {
      return this.zCollapsedWidth();
    }

    const width = this.zWidth();
    return typeof width === 'number' ? width : parseInt(width, 10);
  });

  protected readonly chevronIcon = computed((): B3Icon => {
    const collapsed = this.zCollapsed();
    const reverse = this.zReverseArrow();

    if (reverse) {
      return collapsed ? 'chevron-left' : 'chevron-right';
    }
    return collapsed ? 'chevron-right' : 'chevron-left';
  });

  protected readonly classes = computed(() => mergeClasses(sidebarVariants(), this.class()));

  protected readonly triggerClasses = computed(() => mergeClasses(sidebarTriggerVariants()));

  toggleCollapsed(): void {
    const newState = !this.zCollapsed();
    this.internalCollapsed.set(newState);
    this.zCollapsedChange.emit(newState);
  }
}

@Component({
  selector: 'b3-sidebar-group',
  exportAs: 'zSidebarGroup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="classes()">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarGroupComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(sidebarGroupVariants(), this.class()));
}

@Component({
  selector: 'b3-sidebar-group-label',
  exportAs: 'zSidebarGroupLabel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="classes()">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarGroupLabelComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(sidebarGroupLabelVariants(), this.class()));
}
