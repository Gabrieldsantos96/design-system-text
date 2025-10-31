import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { B3ButtonComponent } from '../../button/button.component';
import { B3ComboboxComponent, type B3ComboboxOption } from '../combobox.component';

@Component({
  selector: 'b3-demo-combobox-form',
  standalone: true,
  imports: [ReactiveFormsModule, B3ComboboxComponent, B3ButtonComponent],
  template: `
    <div class="flex flex-col gap-4">
      <b3-combobox
        [options]="frameworks"
        [placeholder]="'Select framework...'"
        [searchPlaceholder]="'Search framework...'"
        [emptyText]="'No framework found.'"
        [formControl]="frameworkControl"
      />

      <div class="flex gap-2">
        <button b3-button variant="outline" (click)="setValue()">Set to Vue.js</button>
        <button b3-button variant="outline" (click)="clearValue()">Clear</button>
        <button b3-button variant="outline" (click)="logValue()">Log Value</button>
      </div>

      <div class="text-sm text-muted-foreground">Current value: {{ frameworkControl.value ?? 'None' }}</div>
    </div>
  `,
})
export class B3DemoComboboxFormComponent {
  frameworkControl = new FormControl<string | null>(null);

  frameworks: B3ComboboxOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'ember', label: 'Ember.js' },
  ];

  setValue() {
    this.frameworkControl.setValue('vue');
  }

  clearValue() {
    this.frameworkControl.setValue(null);
  }

  logValue() {
    console.log('Form Control Value:', this.frameworkControl.value);
  }
}
