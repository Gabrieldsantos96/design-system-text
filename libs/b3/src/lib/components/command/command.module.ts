import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3CommandDividerComponent } from './command-divider.component';
import { B3CommandEmptyComponent } from './command-empty.component';
import { B3CommandInputComponent } from './command-input.component';
import { B3CommandListComponent } from './command-list.component';
import { B3CommandOptionGroupComponent } from './command-option-group.component';
import { B3CommandOptionComponent } from './command-option.component';
import { B3CommandComponent } from './command.component';

const COMMAND_COMPONENTS = [
  B3CommandComponent,
  B3CommandInputComponent,
  B3CommandListComponent,
  B3CommandEmptyComponent,
  B3CommandOptionComponent,
  B3CommandOptionGroupComponent,
  B3CommandDividerComponent,
];

@NgModule({
  imports: [FormsModule, ...COMMAND_COMPONENTS],
  exports: [...COMMAND_COMPONENTS],
})
export class B3CommandModule {}
