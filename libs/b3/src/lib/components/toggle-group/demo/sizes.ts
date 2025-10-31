import { Component } from '@angular/core';

import { B3ToggleGroupComponent, type B3ToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-sizes',
  standalone: true,
  imports: [B3ToggleGroupComponent],
  template: `
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Small</h3>
        <b3-toggle-group zMode="multiple" zSize="sm" [items]="items" (valueChange)="onToggleChange($event)"></b3-toggle-group>
      </div>

      <div>
        <h3 class="text-sm font-medium mb-2">Default</h3>
        <b3-toggle-group zMode="multiple" zSize="md" [items]="items" (valueChange)="onToggleChange($event)"></b3-toggle-group>
      </div>

      <div>
        <h3 class="text-sm font-medium mb-2">Large</h3>
        <b3-toggle-group zMode="multiple" zSize="lg" [items]="items" (valueChange)="onToggleChange($event)"></b3-toggle-group>
      </div>
    </div>
  `,
})
export default class ToggleGroupSizesComponent {
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
