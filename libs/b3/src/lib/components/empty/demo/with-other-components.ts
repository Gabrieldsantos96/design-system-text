import { Component } from '@angular/core';

import { B3ComboboxComponent } from '../../combobox/combobox.component';
import { B3CommandEmptyComponent } from '../../command/command-empty.component';
import { B3CommandInputComponent } from '../../command/command-input.component';
import { B3CommandListComponent } from '../../command/command-list.component';
import { B3CommandComponent } from '../../command/command.component';
import { B3SelectComponent } from '../../select/select.component';
import { B3TableComponent } from '../../table/table.component';
import { B3EmptyComponent } from '../empty.component';

@Component({
  selector: 'b3-demo-empty-with-other',
  standalone: true,
  imports: [
    B3CommandComponent,
    B3CommandEmptyComponent,
    B3CommandInputComponent,
    B3CommandListComponent,
    B3EmptyComponent,
    B3ComboboxComponent,
    B3SelectComponent,
    B3TableComponent,
  ],
  template: `
    <div class="flex flex-col gap-5">
      <div class="space-y-2">
        <h6 class="font-semibold text-sm">Combobox</h6>
        <b3-combobox [options]="[]" class="w-[200px]" [placeholder]="'Select framework...'" [searchPlaceholder]="'Search framework...'" [emptyText]="'No framework found.'" />
      </div>

      <div class="space-y-2">
        <h6 class="font-semibold text-sm">Table</h6>
        <table b3-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td [colSpan]="2">
                <b3-empty [zDescription]="'No data found.'" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-2">
        <h6 class="font-semibold text-sm">Command</h6>
        <b3-command class="md:min-w-[500px]">
          <b3-command-input placeholder="Search actions, files, and more..."></b3-command-input>
          <b3-command-list>
            <b3-command-empty>
              <b3-empty [zDescription]="'No commands found.'" />
            </b3-command-empty>
          </b3-command-list>
        </b3-command>
      </div>

      <div class="space-y-2">
        <h6 class="font-semibold text-sm">Select</h6>
        <b3-select placeholder="Select a fruit">
          <b3-empty [zDescription]="'No fruits found.'" />
        </b3-select>
      </div>
    </div>
  `,
})
export class B3DemoEmptyWithOtherComponent {}
