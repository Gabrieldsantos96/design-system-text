import { booleanAttribute, ChangeDetectionStrategy, Component, computed, forwardRef, input, linkedSignal, output, ViewEncapsulation } from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import type { ClassValue } from 'clsx';

import {
  paginationContentVariants,
  paginationEllipsisVariants,
  paginationItemVariants,
  paginationNextVariants,
  paginationPreviousVariants,
  paginationVariants,
} from './pagination.variants';
import { mergeClasses } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';
import { type B3ButtonVariants } from '../button/button.variants';
import { B3IconComponent } from '../icon/icon.component';

@Component({
  selector: 'b3-pagination-content',
  exportAs: 'zPaginationContent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [attr.aria-label]="ariaLabel()" role="navigation" data-slot="pagination-content" [class]="classes()">
      <ng-content></ng-content>
    </div>
  `,
})
export class B3PaginationContentComponent {
  readonly ariaLabel = input<string>('pagination-content');

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(paginationContentVariants(), this.class()));
}

@Component({
  selector: 'b3-pagination-item',
  exportAs: 'zPaginationItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div data-slot="pagination-item" [class]="classes()">
      <ng-content></ng-content>
    </div>
  `,
})
export class B3PaginationItemComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(paginationItemVariants(), this.class()));
}

@Component({
  selector: 'b3-pagination-button',
  exportAs: 'zPaginationButton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3ButtonComponent],
  template: `
    <button
      b3-button
      data-slot="pagination-button"
      [attr.aria-disabled]="zDisabled() || null"
      [attr.data-disabled]="zDisabled() || null"
      [attr.aria-current]="zActive() ? 'page' : undefined"
      [attr.data-active]="zActive() || null"
      [zType]="zType()"
      [zSize]="zSize()"
      [class]="class()"
      (click)="handleClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class B3PaginationButtonComponent {
  readonly zDisabled = input(false, { transform: booleanAttribute });
  readonly zActive = input(false, { transform: booleanAttribute });
  readonly zSize = input<B3ButtonVariants['zSize']>();

  readonly class = input<ClassValue>('');
  readonly zClick = output<void>();

  protected readonly zType = computed<B3ButtonVariants['zType']>(() => (this.zActive() ? 'outline' : 'ghost'));

  handleClick() {
    if (!this.zDisabled() && !this.zActive()) {
      this.zClick.emit();
    }
  }
}

@Component({
  selector: 'b3-pagination-previous',
  exportAs: 'zPaginationPrevious',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3PaginationButtonComponent, B3IconComponent],
  template: `
    <b3-pagination-button aria-label="Go to previous page" [class]="classes()" [zSize]="'default'">
      <b3-icon zType="chevron-left" />
      <span class="hidden sm:block">Previous</span>
    </b3-pagination-button>
  `,
})
export class B3PaginationPreviousComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(paginationPreviousVariants(), this.class()));
}

@Component({
  selector: 'b3-pagination-next',
  exportAs: 'zPaginationNext',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3PaginationButtonComponent, B3IconComponent],
  template: `
    <b3-pagination-button aria-label="Go to next page" [class]="classes()" [zSize]="'default'">
      <span class="hidden sm:block">Next</span>
      <b3-icon zType="chevron-right" />
    </b3-pagination-button>
  `,
})
export class B3PaginationNextComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(paginationNextVariants(), this.class()));
}

@Component({
  selector: 'b3-pagination-ellipsis',
  exportAs: 'zPaginationEllipsis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3IconComponent],
  template: `
    <b3-icon zType="ellipsis" aria-hidden="true" role="presentation" />
    <span class="sr-only">More pages</span>
  `,
  host: {
    '[class]': 'classes()',
  },
})
export class B3PaginationEllipsisComponent {
  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() => mergeClasses(paginationEllipsisVariants(), this.class()));
}

@Component({
  selector: 'b3-pagination',
  exportAs: 'zPagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3PaginationContentComponent, B3PaginationItemComponent, B3PaginationButtonComponent, B3IconComponent],
  template: `
    <b3-pagination-content>
      <b3-pagination-item>
        <b3-pagination-button aria-label="Go to previous page" [zSize]="zSize()" [zDisabled]="disabled() || currentPage() === 1" (zClick)="goToPrevious()">
          <b3-icon zType="chevron-left" />
        </b3-pagination-button>
      </b3-pagination-item>

      @for (page of pages(); track page) {
        <b3-pagination-item>
          <b3-pagination-button [zSize]="zSize()" [zActive]="page === currentPage()" [zDisabled]="disabled()" (zClick)="goToPage(page)">
            {{ page }}
          </b3-pagination-button>
        </b3-pagination-item>
      }

      <b3-pagination-item>
        <b3-pagination-button aria-label="Go to next page" [zSize]="zSize()" [zDisabled]="disabled() || currentPage() === zTotal()" (zClick)="goToNext()">
          <b3-icon zType="chevron-right" />
        </b3-pagination-button>
      </b3-pagination-item>
    </b3-pagination-content>
  `,
  host: {
    '[class]': 'classes()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B3PaginationComponent),
      multi: true,
    },
  ],
})
export class B3PaginationComponent implements ControlValueAccessor {
  readonly zPageIndex = input<number>(1);
  readonly zTotal = input<number>(1);
  readonly zSize = input<B3ButtonVariants['zSize']>();
  readonly zDisabled = input(false, { transform: booleanAttribute });

  readonly class = input<ClassValue>('');

  readonly zPageIndexChange = output<number>();

  protected readonly classes = computed(() => mergeClasses(paginationVariants(), this.class()));

  protected readonly disabled = linkedSignal(() => {
    return this.zDisabled();
  });

  readonly currentPage = linkedSignal(this.zPageIndex);

  readonly pages = computed<number[]>(() => Array.from({ length: Math.max(0, this.zTotal()) }, (_, i) => i + 1));

  goToPage(page: number): void {
    if (this.disabled()) return;
    if (page !== this.currentPage() && page >= 1 && page <= this.zTotal()) {
      this.currentPage.set(page);
      this.zPageIndexChange.emit(page);
      this.onChange(page);
      this.onTouched();
    }
  }

  goToPrevious() {
    this.goToPage(this.currentPage() - 1);
  }

  goToNext() {
    this.goToPage(this.currentPage() + 1);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: number) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  writeValue(value: number): void {
    this.currentPage.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
