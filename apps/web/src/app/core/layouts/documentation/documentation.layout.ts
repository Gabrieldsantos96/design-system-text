import { Component, computed, inject, signal, afterNextRender, DestroyRef } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B3ToastComponent } from '@b3/components/toast/toast.component';
import { BannerComponent } from '@b3/domain/components/banner/banner.component';
import { FooterComponent } from '@b3/domain/components/footer/footer.component';
import { HeaderComponent } from '@b3/domain/components/header/header.component';
import { SidebarComponent } from '@b3/domain/components/sidebar/sidebar.component';
import { environment } from '@b3/env/environment';
import { DarkModeService } from '@b3/shared/services/darkmode.service';

@Component({
  selector: 'b3-documentation',
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

    <main class="flex items-start max-w-[var(--breakpoint-2xl)] min-h-min mx-auto mt-8 relative">
      <b3-sidebar></b3-sidebar>
      <section class="flex-1 min-w-0">
        <router-outlet></router-outlet>
      </section>
    </main>
    <b3-footer></b3-footer>
    <b3-toaster [theme]="currentTheme()" />
  `,
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, BannerComponent, SidebarComponent, B3ToastComponent],
})
export class DocumentationLayout {
  private readonly darkModeService = inject(DarkModeService);
  private readonly destroyRef = inject(DestroyRef);
  readonly isDevEnv = !environment.production;
  readonly isDevMode = environment.devMode;

  private readonly themeSignal = signal<'light' | 'dark'>('light');
  readonly currentTheme = computed(() => this.themeSignal());

  constructor() {
    this.themeSignal.set(this.darkModeService.getCurrentTheme());

    afterNextRender(() => {
      const observer = new MutationObserver(() => {
        const newTheme = this.darkModeService.getCurrentTheme();
        if (newTheme !== this.themeSignal()) {
          this.themeSignal.set(newTheme);
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class', 'data-theme'],
      });

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
