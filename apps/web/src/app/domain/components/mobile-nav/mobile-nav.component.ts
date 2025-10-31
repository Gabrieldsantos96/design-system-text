import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { environment } from '@b3/env/environment';
import { SIDEBAR_PATHS, HEADER_PATHS } from '@b3/shared/constants/routes.constant';

@Component({
  selector: 'b3-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  standalone: true,
  imports: [RouterModule, B3ButtonComponent, B3BadgeComponent],
})
export class MobileMenuComponent {
  readonly mainMenu = [{ name: 'Home', path: '/', available: true }, ...HEADER_PATHS];
  readonly sidebarPaths = SIDEBAR_PATHS;
  readonly appVersion = environment.appVersion;
  sidebarState = signal<boolean>(false);

  toggleMenu(): void {
    this.sidebarState.set(!this.sidebarState());
  }

  closeMenu(): void {
    this.sidebarState.set(false);
  }

  isAvailable(available: boolean): void {
    if (available) {
      this.closeMenu();
    }
  }
}
