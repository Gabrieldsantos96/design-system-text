import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, signal, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { B3CommandComponent } from './command.component';
import { commandItemVariants, commandShortcutVariants, type B3CommandItemVariants } from './command.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';
import { B3IconComponent } from '../icon/icon.component';
import type { B3Icon } from '../icon/icons';

@Component({
  selector: 'b3-command-option',
  exportAs: 'zCommandOption',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3IconComponent],
  template: `
    @if (shouldShow()) {
      <div
        [class]="classes()"
        [attr.role]="'option'"
        [attr.aria-selected]="isSelected()"
        [attr.data-selected]="isSelected()"
        [attr.data-disabled]="zDisabled()"
        [attr.tabindex]="0"
        (click)="onClick()"
        (keydown)="onKeyDown($event)"
        (mouseenter)="onMouseEnter()"
      >
        @if (zIcon()) {
          <div b3-icon [zType]="zIcon()!" class="mr-2 shrink-0 flex items-center justify-center"></div>
        }
        <span class="flex-1">{{ zLabel() }}</span>
        @if (zShortcut()) {
          <span [class]="shortcutClasses()">{{ zShortcut() }}</span>
        }
      </div>
    }
  `,
})
export class B3CommandOptionComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly commandComponent = inject(B3CommandComponent, { optional: true });

  readonly zValue = input.required<unknown>();
  readonly zLabel = input.required<string>();
  readonly zCommand = input<string>('');
  readonly zIcon = input<B3Icon>();
  readonly zShortcut = input<string>('');
  readonly zDisabled = input(false, { transform });
  readonly variant = input<B3CommandItemVariants['variant']>('default');
  readonly class = input<ClassValue>('');

  readonly isSelected = signal(false);

  protected readonly classes = computed(() => {
    const baseClasses = commandItemVariants({ variant: this.variant() });
    const selectedClasses = this.isSelected() ? 'bg-accent text-accent-foreground' : '';
    return mergeClasses(baseClasses, selectedClasses, this.class());
  });

  protected readonly shortcutClasses = computed(() => mergeClasses(commandShortcutVariants({})));

  protected readonly shouldShow = computed(() => {
    if (!this.commandComponent) return true;

    const filteredOptions = this.commandComponent.filteredOptions();
    const searchTerm = this.commandComponent.searchTerm();

    // If no search term, show all options
    if (searchTerm === '') return true;

    // Check if this option is in the filtered list
    return filteredOptions.includes(this);
  });

  onClick() {
    if (this.zDisabled()) return;
    if (this.commandComponent) {
      this.commandComponent.selectOption(this);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onClick();
    }
  }

  onMouseEnter() {
    if (this.zDisabled()) return;
    // Visual feedback for hover
  }

  setSelected(selected: boolean) {
    this.isSelected.set(selected);
  }

  focus() {
    const element = this.elementRef.nativeElement;
    element.focus();
    // Scroll element into view if needed
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
