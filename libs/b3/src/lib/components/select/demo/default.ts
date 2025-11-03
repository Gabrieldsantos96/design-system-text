import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { B3MultiSelectComponent } from '../../multi-select/multi-select.component';
import { B3SelectItemComponent } from '../select-item.component';
import { B3SelectComponent } from '../select.component';


@Component({
  selector: 'b3-demo-select-basic',
  standalone: true,
  imports: [FormsModule, B3SelectComponent, B3SelectItemComponent, B3MultiSelectComponent],
  template: `
   <div class="p-4">
      <h3 class="mb-2 font-semibold">Teste do B3MultiSelect</h3>

      <b3-multi-select
        [(ngModel)]="selectedFruits"
        [options]="fruits"
        optionLabel="label"
        optionValue="value"
        placeholder="Selecione frutas"
        [showClear]="true"
        [filter]="true"
        [zSize]="'default'"
      ></b3-multi-select>
    </div>
  `,
})
export class B3DemoSelectBasicComponent {

   fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Pineapple', value: 'pineapple' },
  ];

  selectedFruits = [
    { label: 'Banana', value: 'banana' },
  ];
}
