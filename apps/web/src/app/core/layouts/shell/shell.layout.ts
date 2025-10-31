import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '@b3/domain/components/banner/banner.component';
import { FooterComponent } from '@b3/domain/components/footer/footer.component';
import { HeaderComponent } from '@b3/domain/components/header/header.component';
import { environment } from '@b3/env/environment';

@Component({
  selector: 'b3-shell',
  template: `
    @if (isDevEnv) {
      <b3-banner [isDevMode]="isDevMode">
        @if (isDevMode) {
          You're in <b>DEV</b> Mode!
        } @else {
          Welcome to B3 ui <b class="text-red-400 font-semibold">DEV</b> enviroment!
        }
      </b3-banner>
    }
    <b3-header></b3-header>

    <main class="flex flex-col">
      <router-outlet></router-outlet>
    </main>
    <b3-footer></b3-footer>
  `,
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, BannerComponent],
})
export class ShellLayout {
  readonly isDevEnv = !environment.production;
  readonly isDevMode = environment.devMode;
}
