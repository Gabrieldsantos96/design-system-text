import { Injectable } from '@angular/core';

import type { B3MenuDirective } from './menu.directive';

@Injectable({
  providedIn: 'root',
})
export class B3MenuManagerService {
  private activeHoverMenu: B3MenuDirective | null = null;

  registerHoverMenu(menu: B3MenuDirective): void {
    if (this.activeHoverMenu && this.activeHoverMenu !== menu) {
      this.activeHoverMenu.close();
    }
    this.activeHoverMenu = menu;
  }

  unregisterHoverMenu(menu: B3MenuDirective): void {
    if (this.activeHoverMenu === menu) {
      this.activeHoverMenu = null;
    }
  }

  closeActiveMenu(): void {
    if (this.activeHoverMenu) {
      this.activeHoverMenu.close();
      this.activeHoverMenu = null;
    }
  }
}
