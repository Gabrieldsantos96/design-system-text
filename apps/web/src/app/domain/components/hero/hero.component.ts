import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';

@Component({
  selector: 'b3-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, B3ButtonComponent, B3BadgeComponent, B3IconComponent],
  template: `
    <section class="relative overflow-hidden p-5 md:p-0">
      <div class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 dark:from-background dark:via-background dark:to-primary/5"></div>

      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div class="relative container mx-auto px-4 min-h-[90vh] flex items-center justify-center">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h1 class="text-4xl sm:text-5xl xl:text-7xl font-bold tracking-tight leading-tight">
            A biblioteca
            <span class="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">B3UI</span>
            <br class="hidden sm:block" />
            para
            <span class="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Angular</span>.
          </h1>

          <p class="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Componentes financeiros prontos para produção, construídos com
            <span class="font-semibold text-foreground">Angular</span>,
            <span class="font-semibold text-foreground">TypeScript</span> e
            <span class="font-semibold text-foreground">Tailwind CSS</span>.
            Design institucional, performance e acessibilidade.
          </p>

          <b3-badge zType="secondary" class="text-sm px-4 py-1">
            @b3/ui — UI System da B3 • Acessível • Responsivo • Open Source
          </b3-badge>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a b3-button routerLink="/docs/components" class="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Explorar Componentes
              <b3-icon zType="chevron-right" class="shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1 ml-2" />
            </a>
            <a b3-button zType="outline" routerLink="/docs/installation" class="px-8 py-3">
              Começar Agora
            </a>
          </div>

          <div class="flex justify-center items-center gap-6 pt-8">
            <span class="text-sm text-muted-foreground font-medium">Construído com</span>
            <div class="flex items-center gap-4">
              @for (image of stackImages(); track image.src) {
                <div class="transition-transform duration-200 hover:scale-110">
                  <img [src]="image.src" [class]="image.class" [alt]="image.alt" loading="lazy" width="32" height="32" />
                </div>
              }
            </div>
          </div>

          <div class="mt-12 flex justify-center">
            <img
              src="assets/b3-logo-white.svg"
              alt="Logo B3"
              class="h-10 opacity-70 dark:opacity-50"
              width="120"
              height="40"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly stackImages = signal([
    { src: 'icons/angular.svg', class: 'size-8 invert dark:invert-0', alt: 'Angular' },
    { src: 'icons/typescript.svg', class: 'size-8 invert-0 dark:invert', alt: 'TypeScript' },
    { src: 'icons/tailwind.svg', class: 'size-8 invert-0 dark:invert', alt: 'Tailwind CSS' },
  ]);
}