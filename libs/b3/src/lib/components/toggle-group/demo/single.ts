import { Component } from '@angular/core';

import { B3ToggleGroupComponent, type B3ToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-single',
  standalone: true,
  imports: [B3ToggleGroupComponent],
  template: ` <b3-toggle-group zMode="single" [items]="items" defaultValue="center" (valueChange)="onToggleChange($event)"></b3-toggle-group> `,
})
export default class ToggleGroupSingleComponent {
  items: B3ToggleGroupItem[] = [
    {
      value: 'left',
      icon: 'text-align-start',
      ariaLabel: 'Text align start',
    },
    {
      value: 'center',
      icon: 'text-align-center',
      ariaLabel: 'Text align center',
    },
    {
      value: 'right',
      icon: 'text-align-end',
      ariaLabel: 'Text align end',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Selected alignment:', value);
  }
}
