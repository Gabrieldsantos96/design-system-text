```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ToggleGroupComponent, type B3ToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-default',
  standalone: true,
  imports: [B3ToggleGroupComponent],
  template: ` <b3-toggle-group zMode="multiple" [items]="items" [defaultValue]="['italic']" (valueChange)="onToggleChange($event)"></b3-toggle-group> `,
})
export default class ToggleGroupDefaultComponent {
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
    console.log('Toggle group changed:', value);
  }
}

```