import { Component } from '@angular/core';

import { B3ComboboxComponent, type B3ComboboxOption } from '../combobox.component';

@Component({
  selector: 'b3-demo-combobox-disabled',
  standalone: true,
  imports: [B3ComboboxComponent],
  template: `
    <div class="flex gap-4">
      <b3-combobox [options]="frameworks" [placeholder]="'Disabled combobox'" [disabled]="true" />

      <b3-combobox [options]="frameworksWithDisabled" [placeholder]="'Select framework...'" [searchPlaceholder]="'Search framework...'" [emptyText]="'No framework found.'" />
    </div>
  `,
})
export class B3DemoComboboxDisabledComponent {
  frameworks: B3ComboboxOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
  ];

  frameworksWithDisabled: B3ComboboxOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React', disabled: true },
    { value: 'vue', label: 'Vue.js' },
    { value: 'svelte', label: 'Svelte', disabled: true },
    { value: 'ember', label: 'Ember.js' },
  ];
}
