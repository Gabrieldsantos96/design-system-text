import { NgModule } from '@angular/core';

import { B3MenuContentDirective } from './menu-content.directive';
import { B3MenuItemDirective } from './menu-item.directive';
import { B3MenuDirective } from './menu.directive';

const MENU_COMPONENTS = [B3MenuContentDirective, B3MenuItemDirective, B3MenuDirective];

@NgModule({
  imports: [MENU_COMPONENTS],
  exports: [MENU_COMPONENTS],
})
export class B3MenuModule {}
