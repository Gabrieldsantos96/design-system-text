import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { B3CheckboxComponent } from '@b3/components/checkbox/checkbox.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3InputDirective } from '@b3/components/input/input.directive';

@Component({
  selector: 'b3-features',
  standalone: true,
  template: `
    <section class="min-h-screen max-w-4xl mx-auto">
      <header>
        <h1 class="text-center text-2xl xl:text-5xl font-semibold mb-8">Components</h1>
      </header>

      <main class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <b3-card zTitle="Button">
          <button b3-button>Button</button>
        </b3-card>
        <b3-card>
          <b3-badge>Badge</b3-badge>
        </b3-card>
        <b3-card>
          <span b3-checkbox>Checkbox</span>
        </b3-card>
        <b3-card>
          <input b3-input placeholder="Input" />
        </b3-card>
      </main>
      <footer class="flex justify-center mt-8">
        <a b3-button zType="ghost" routerLink="/components/button" class="group"
          >View all
          <b3-icon zType="chevron-right" class="shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </a>
      </footer>
    </section>
  `,
  imports: [RouterModule, B3CardComponent, B3ButtonComponent, B3CardComponent, B3BadgeComponent, B3CheckboxComponent, B3InputDirective, B3IconComponent],
})
export class FeaturesComponent {}
