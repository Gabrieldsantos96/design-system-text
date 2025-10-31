```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ToggleGroupComponent, type B3ToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-outline',
  standalone: true,
  imports: [B3ToggleGroupComponent],
  template: ` <b3-toggle-group zMode="multiple" zType="outline" [items]="items" (valueChange)="onToggleChange($event)"></b3-toggle-group> `,
})
export default class ToggleGroupOutlineComponent {
  items: B3ToggleGroupItem[] = [
    {
      value: 'bold',
      icon: 'bold',
      ariaLabel: 'Toggle bold',
    },
    {
      value: 'italic',
      icon: 'italic',
      ariaLabel: 'Toggle italic',
    },
    {
      value: 'underline',
      icon: 'underline',
      ariaLabel: 'Toggle underline',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Selected formatting:', value);
  }
}

```