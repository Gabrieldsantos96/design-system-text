```angular-ts showLineNumbers copyButton
import { Component, signal } from '@angular/core';

import { B3CalendarComponent } from '../calendar.component';

@Component({
  standalone: true,
  imports: [B3CalendarComponent],
  template: `
    <div class="space-y-4">
      <b3-calendar zMode="single" [(value)]="selectedDate" (dateChange)="onDateChange($event)" />
      @if (selectedDate()) {
        <p class="text-sm text-muted-foreground">Selected date: {{ formatDate(selectedDate()!) }}</p>
      }
    </div>
  `,
})
export class B3DemoCalendarSingleComponent {
  selectedDate = signal<Date | null>(null);

  onDateChange(date: Date | Date[]) {
    console.log('Selected date:', date);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

```