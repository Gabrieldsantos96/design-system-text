```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3CalendarComponent } from '../calendar.component';

@Component({
  selector: 'b3-demo-calendar-default',
  standalone: true,
  imports: [B3CalendarComponent],
  template: ` <b3-calendar (dateChange)="onDateChange($event)" /> `,
})
export class B3DemoCalendarDefaultComponent {
  onDateChange(date: Date | Date[]) {
    console.log('Selected date:', date);
  }
}

```