

```angular-ts title="date-picker.component.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output, type TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';

import { mergeClasses } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';
import { B3CalendarComponent } from '../calendar/calendar.component';
import { B3IconComponent } from '../icon/icon.component';
import { B3PopoverComponent, B3PopoverDirective } from '../popover/popover.component';
import { datePickerVariants, type B3DatePickerVariants } from './date-picker.variants';

import type { ClassValue } from 'clsx';

const HEIGHT_BY_SIZE: Record<NonNullable<B3DatePickerVariants['zSize']>, string> = {
  sm: 'h-8',
  default: 'h-10',
  lg: 'h-12',
};

@Component({
  selector: 'b3-date-picker, [b3-date-picker]',
  exportAs: 'zDatePicker',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3ButtonComponent, B3CalendarComponent, B3PopoverComponent, B3PopoverDirective, B3IconComponent],
  host: {},
  template: `
    <button
      b3-button
      [zType]="zType()"
      [zSize]="zSize()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      zPopover
      #popoverDirective="zPopover"
      [zContent]="calendarTemplate"
      zTrigger="click"
      (zVisibleChange)="onPopoverVisibilityChange($event)"
      [attr.aria-expanded]="false"
      [attr.aria-haspopup]="true"
      aria-label="Choose date"
    >
      <b3-icon zType="calendar" />
      <span [class]="textClasses()">
        {{ displayText() }}
      </span>
    </button>

    <ng-template #calendarTemplate>
      <b3-popover [class]="popoverClasses()">
        <b3-calendar #calendar [value]="value()" [minDate]="minDate()" [maxDate]="maxDate()" [disabled]="disabled()" (dateChange)="onDateChange($event)" />
      </b3-popover>
    </ng-template>
  `,
  providers: [DatePipe],
})
export class B3DatePickerComponent {
  private readonly datePipe = inject(DatePipe);

  readonly calendarTemplate = viewChild.required<TemplateRef<unknown>>('calendarTemplate');
  readonly popoverDirective = viewChild.required<B3PopoverDirective>('popoverDirective');
  readonly calendar = viewChild.required<B3CalendarComponent>('calendar');

  readonly class = input<ClassValue>('');
  readonly zType = input<B3DatePickerVariants['zType']>('outline');
  readonly zSize = input<B3DatePickerVariants['zSize']>('default');
  readonly value = input<Date | null>(null);
  readonly placeholder = input<string>('Pick a date');
  readonly zFormat = input<string>('MMMM d, yyyy');
  readonly minDate = input<Date | null>(null);
  readonly maxDate = input<Date | null>(null);
  readonly disabled = input<boolean>(false);

  readonly dateChange = output<Date | null>();

  protected readonly classes = computed(() =>
    mergeClasses(
      datePickerVariants({
        zSize: this.zSize(),
      }),
      this.class(),
    ),
  );

  protected readonly buttonClasses = computed(() => {
    const hasValue = !!this.value();
    const size: NonNullable<B3DatePickerVariants['zSize']> = this.zSize() ?? 'default';
    const height = HEIGHT_BY_SIZE[size];
    return mergeClasses('justify-start text-left font-normal', !hasValue && 'text-muted-foreground', height, 'min-w-[240px]');
  });

  protected readonly textClasses = computed(() => {
    const hasValue = !!this.value();
    return mergeClasses(!hasValue && 'text-muted-foreground');
  });

  protected readonly popoverClasses = computed(() => mergeClasses('w-auto p-0'));

  protected readonly displayText = computed(() => {
    const date = this.value();
    if (!date) {
      return this.placeholder();
    }
    return this.formatDate(date, this.zFormat());
  });

  protected onDateChange(date: Date | Date[]): void {
    // Date picker always uses single mode, so we can safely cast
    const singleDate = Array.isArray(date) ? (date[0] ?? null) : date;
    this.dateChange.emit(singleDate);

    this.popoverDirective().hide();
  }

  protected onPopoverVisibilityChange(visible: boolean): void {
    if (visible) {
      setTimeout(() => {
        if (this.calendar()) {
          this.calendar().resetNavigation();
        }
      });
    }
  }

  private formatDate(date: Date, format: string): string {
    return this.datePipe.transform(date, format) ?? '';
  }
}

```



```angular-ts title="date-picker.variants.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { cva, type VariantProps } from 'class-variance-authority';

const datePickerVariants = cva('', {
  variants: {
    zSize: {
      sm: '',
      default: '',
      lg: '',
    },
    zType: {
      default: '',
      outline: '',
      ghost: '',
    },
  },
  defaultVariants: {
    zSize: 'default',
    zType: 'outline',
  },
});

export { datePickerVariants };
export type B3DatePickerVariants = VariantProps<typeof datePickerVariants>;

```

