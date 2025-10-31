import { Component } from '@angular/core';

import { B3ToggleGroupComponent, type B3ToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-with-text',
  standalone: true,
  imports: [B3ToggleGroupComponent],
  template: ` <b3-toggle-group zMode="multiple" [items]="items" [defaultValue]="['italic']" (valueChange)="onToggleChange($event)"></b3-toggle-group> `,
})
export default class ToggleGroupWithTextComponent {
  items: B3ToggleGroupItem[] = [
    {
      value: 'bold',
      icon: 'bold',
      label: 'Bold',
      ariaLabel: 'Toggle bold',
    },
    {
      value: 'italic',
      icon: 'italic',
      label: 'Italic',
      ariaLabel: 'Toggle italic',
    },
    {
      value: 'underline',
      icon: 'underline',
      label: 'Underline',
      ariaLabel: 'Toggle underline',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Selected formatting:', value);
  }
}
