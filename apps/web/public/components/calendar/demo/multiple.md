```angular-ts showLineNumbers copyButton
import { Component, signal } from '@angular/core';

import { B3CalendarComponent } from '../calendar.component';

@Component({
  selector: 'b3-demo-calendar-multiple',
  standalone: true,
  imports: [B3CalendarComponent],
  template: `
    <div class="space-y-4">
      <b3-calendar zMode="multiple" [(value)]="selectedDates" (dateChange)="onDateChange($event)" />

      <div class="text-muted-foreground mt-2 text-sm">
        <p class="font-medium">Selected ({{ selectedDates()?.length ?? 0 }}) date(s).</p>
      </div>
    </div>
  `,
})
export class B3DemoCalendarMultipleComponent {
  selectedDates = signal<Date[] | null>(null);

  onDateChange(dates: Date | Date[]) {
    console.log('Selected dates:', dates);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  }
}

```