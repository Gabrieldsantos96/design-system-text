```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3SegmentedComponent } from '../segmented.component';

@Component({
  selector: 'zard-demo-segmented-sizes',
  standalone: true,
  imports: [B3SegmentedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2">Small</label>
        <b3-segmented zSize="sm" [zOptions]="options" zDefaultValue="tab1"> </b3-segmented>
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Default</label>
        <b3-segmented [zOptions]="options" zDefaultValue="tab1"> </b3-segmented>
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Large</label>
        <b3-segmented zSize="lg" [zOptions]="options" zDefaultValue="tab1"> </b3-segmented>
      </div>
    </div>
  `,
})
export class B3DemoSegmentedSizesComponent {
  options = [
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3' },
  ];
}

```