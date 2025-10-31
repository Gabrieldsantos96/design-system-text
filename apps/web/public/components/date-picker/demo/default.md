```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { B3DatePickerComponent } from '../date-picker.component';

@Component({
  selector: 'zard-demo-date-picker-default',
  standalone: true,
  imports: [B3DatePickerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <b3-date-picker [value]="selectedDate()" placeholder="Pick a date" (dateChange)="onDateChange($event)" /> `,
})
export class B3DemoDatePickerDefaultComponent {
  selectedDate = signal<Date | null>(null);

  onDateChange(date: Date | null) {
    this.selectedDate.set(date);
    console.log('Selected date:', date);
  }
}

```