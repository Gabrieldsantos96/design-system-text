import { ChangeDetectionStrategy, Component, computed, input, output, ViewEncapsulation } from '@angular/core';

import { calendarNavVariants } from './calendar.variants';
import { mergeClasses } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';
import { B3IconComponent } from '../icon/icon.component';
import { B3SelectItemComponent } from '../select/select-item.component';
import { B3SelectComponent } from '../select/select.component';

@Component({
  selector: 'b3-calendar-navigation',
  exportAs: 'zCalendarNavigation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [B3ButtonComponent, B3IconComponent, B3SelectComponent, B3SelectItemComponent],
  template: `
    <div [class]="navClasses()">
      <button b3-button zType="ghost" zSize="sm" (click)="onPreviousClick()" [disabled]="isPreviousDisabled()" aria-label="Previous month" class="p-0 h-7 w-7">
        <b3-icon zType="chevron-left"></b3-icon>
      </button>

      <!-- Month and Year Selectors -->
      <div class="flex items-center space-x-2">
        <!-- Month Select -->
        <b3-select [zValue]="currentMonth()" [zLabel]="currentMonthName()" (zSelectionChange)="monthChange.emit($event)">
          @for (month of months; track $index) {
            <b3-select-item [zValue]="$index.toString()">{{ month }}</b3-select-item>
          }
        </b3-select>

        <!-- Year Select -->
        <b3-select [zValue]="currentYear()" [zLabel]="currentYear()" (zSelectionChange)="yearChange.emit($event)">
          @for (year of availableYears(); track year) {
            <b3-select-item [zValue]="year.toString()">{{ year }}</b3-select-item>
          }
        </b3-select>
      </div>

      <button b3-button zType="ghost" zSize="sm" (click)="onNextClick()" [disabled]="isNextDisabled()" aria-label="Next month" class="p-0 h-7 w-7">
        <b3-icon zType="chevron-right"></b3-icon>
      </button>
    </div>
  `,
})
export class B3CalendarNavigationComponent {
  // Inputs
  readonly currentMonth = input.required<string>();
  readonly currentYear = input.required<string>();
  readonly minDate = input<Date | null>(null);
  readonly maxDate = input<Date | null>(null);
  readonly disabled = input<boolean>(false);

  // Outputs
  readonly monthChange = output<string>();
  readonly yearChange = output<string>();
  readonly previousMonth = output<void>();
  readonly nextMonth = output<void>();

  readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  protected readonly navClasses = computed(() => mergeClasses(calendarNavVariants()));

  protected readonly availableYears = computed(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  });

  protected readonly currentMonthName = computed(() => {
    const selectedMonth = parseInt(this.currentMonth());
    if (!isNaN(selectedMonth) && this.months[selectedMonth]) return this.months[selectedMonth];
    return this.months[new Date().getMonth()];
  });

  protected isPreviousDisabled(): boolean {
    if (this.disabled()) return true;

    const minDate = this.minDate();
    if (!minDate) return false;

    const currentMonth = parseInt(this.currentMonth());
    const currentYear = parseInt(this.currentYear());
    const lastDayOfPreviousMonth = new Date(currentYear, currentMonth, 0);

    return lastDayOfPreviousMonth.getTime() < minDate.getTime();
  }

  protected isNextDisabled(): boolean {
    if (this.disabled()) return true;

    const maxDate = this.maxDate();
    if (!maxDate) return false;

    const currentMonth = parseInt(this.currentMonth());
    const currentYear = parseInt(this.currentYear());
    const nextMonth = new Date(currentYear, currentMonth + 1, 1);

    return nextMonth.getTime() > maxDate.getTime();
  }

  protected onPreviousClick(): void {
    this.previousMonth.emit();
  }

  protected onNextClick(): void {
    this.nextMonth.emit();
  }
}
