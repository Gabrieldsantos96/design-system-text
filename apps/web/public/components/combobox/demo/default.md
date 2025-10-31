```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ComboboxComponent, type B3ComboboxOption } from '../combobox.component';

@Component({
  selector: 'zard-demo-combobox-default',
  standalone: true,
  imports: [B3ComboboxComponent],
  template: `
    <b3-combobox
      [options]="frameworks"
      class="w-[200px]"
      [placeholder]="'Select framework...'"
      [searchPlaceholder]="'Search framework...'"
      [emptyText]="'No framework found.'"
      (zOnSelect)="onSelect($event)"
    />
  `,
})
export class B3DemoComboboxDefaultComponent {
  frameworks: B3ComboboxOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'ember', label: 'Ember.js' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  onSelect(option: B3ComboboxOption) {
    console.log('Selected:', option);
  }
}

```