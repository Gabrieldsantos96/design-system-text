```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3SegmentedComponent } from '../segmented.component';

@Component({
  selector: 'zard-demo-segmented-disabled',
  standalone: true,
  imports: [B3SegmentedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2">With disabled options</label>
        <b3-segmented [zOptions]="optionsWithDisabled" zDefaultValue="enabled1"> </b3-segmented>
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Entire component disabled</label>
        <b3-segmented [zOptions]="options" zDefaultValue="tab1" [zDisabled]="true"> </b3-segmented>
      </div>
    </div>
  `,
})
export class B3DemoSegmentedDisabledComponent {
  options = [
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3' },
  ];

  optionsWithDisabled = [
    { value: 'enabled1', label: 'Enabled' },
    { value: 'disabled1', label: 'Disabled', disabled: true },
    { value: 'enabled2', label: 'Enabled' },
    { value: 'disabled2', label: 'Disabled', disabled: true },
  ];
}

```