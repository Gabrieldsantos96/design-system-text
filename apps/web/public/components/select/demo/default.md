```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3SelectItemComponent } from '../select-item.component';
import { B3SelectComponent } from '../select.component';

@Component({
  selector: 'b3-demo-select-basic',
  standalone: true,
  imports: [FormsModule, B3SelectComponent, B3SelectItemComponent],
  template: `
    <b3-select zPlaceholder="Selecione uma fruta" [(ngModel)]="defaultValue">
      <b3-select-item zValue="apple">Apple</b3-select-item>
      <b3-select-item zValue="banana">Banana</b3-select-item>
      <b3-select-item zValue="blueberry">Blueberry</b3-select-item>
      <b3-select-item zValue="grapes">Grapes</b3-select-item>
      <b3-select-item zValue="pineapple" zDisabled>Pineapple</b3-select-item>
    </b3-select>
  `,
})
export class B3DemoSelectBasicComponent {
  defaultValue = 'apple';
}

```