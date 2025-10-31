import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3SegmentedComponent } from '../segmented.component';

@Component({
  selector: 'b3-demo-segmented-default',
  standalone: true,
  imports: [B3SegmentedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <b3-segmented [zOptions]="options" zDefaultValue="all" (zChange)="onSelectionChange($event)"> </b3-segmented> `,
})
export class B3DemoSegmentedDefaultComponent {
  options = [
    { value: 'all', label: 'All' },
    { value: 'unread', label: 'Unread' },
    { value: 'archived', label: 'Archived' },
  ];

  onSelectionChange(value: string) {
    console.log('Selected:', value);
  }
}
