import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';

import { B3DropdownMenuItemComponent } from './dropdown-item.component';
import { B3DropdownMenuLabelComponent } from './dropdown-label.component';
import { B3DropdownMenuContentComponent } from './dropdown-menu-content.component';
import { B3DropdownMenuShortcutComponent } from './dropdown-shortcut.component';
import { B3DropdownDirective } from './dropdown-trigger.directive';
import { B3DropdownMenuComponent } from './dropdown.component';

const DROPDOWN_COMPONENTS = [
  B3DropdownMenuComponent,
  B3DropdownMenuItemComponent,
  B3DropdownMenuLabelComponent,
  B3DropdownMenuShortcutComponent,
  B3DropdownMenuContentComponent,
  B3DropdownDirective,
];

@NgModule({
  imports: [OverlayModule, ...DROPDOWN_COMPONENTS],
  exports: [...DROPDOWN_COMPONENTS],
})
export class B3DropdownModule {}
