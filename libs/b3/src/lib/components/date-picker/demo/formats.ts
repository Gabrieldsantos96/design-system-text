import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3DatePickerComponent } from '../date-picker.component';

@Component({
  selector: 'b3-date-picker-formats-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [B3DatePickerComponent],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">Default Format (MMMM d, yyyy)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">US Format (MM/dd/yyyy)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" zFormat="MM/dd/yyyy" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">European Format (dd-MM-yyyy)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" zFormat="dd-MM-yyyy" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">Short Format (MMM d, yy)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" zFormat="MMM d, yy" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">With Day Name (EEE, MMMM d)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" zFormat="EEE, MMMM d" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">ISO Format (yyyy-MM-dd)</label>
        <b3-date-picker [value]="selectedDate" (dateChange)="selectedDate = $event" zFormat="yyyy-MM-dd" />
      </div>
    </div>
  `,
})
export class B3DatePickerFormatsComponent {
  selectedDate: Date | null = new Date();
}

export default B3DatePickerFormatsComponent;
