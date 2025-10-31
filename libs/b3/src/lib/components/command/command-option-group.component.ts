import { type AfterContentInit, ChangeDetectionStrategy, Component, computed, contentChildren, inject, input, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { B3CommandOptionComponent } from './command-option.component';
import { B3CommandComponent } from './command.component';
import { commandGroupHeadingVariants, commandGroupVariants } from './command.variants';
import { mergeClasses } from '../../shared/utils/utils';

@Component({
  selector: 'b3-command-option-group',
  exportAs: 'zCommandOptionGroup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (shouldShow()) {
      <div [class]="classes()" role="group">
        @if (zLabel()) {
          <div [class]="headingClasses()" role="presentation">
            {{ zLabel() }}
          </div>
        }
        <div role="group">
          <ng-content></ng-content>
        </div>
      </div>
    }
  `,
})
export class B3CommandOptionGroupComponent implements AfterContentInit {
  private readonly commandComponent = inject(B3CommandComponent, { optional: true });

  readonly optionComponents = contentChildren(B3CommandOptionComponent, { descendants: true });

  readonly zLabel = input.required<string>();
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(commandGroupVariants({}), this.class()));

  protected readonly headingClasses = computed(() => mergeClasses(commandGroupHeadingVariants({})));

  protected readonly shouldShow = computed(() => {
    if (!this.commandComponent || !this.optionComponents) return true;

    const searchTerm = this.commandComponent.searchTerm();
    const filteredOptions = this.commandComponent.filteredOptions();

    // If no search term, show all groups
    if (searchTerm === '') return true;

    // Check if any option in this group is in the filtered list
    return this.optionComponents().some(option => filteredOptions.includes(option));
  });

  ngAfterContentInit() {
    // Component is ready when content children are initialized
  }
}
