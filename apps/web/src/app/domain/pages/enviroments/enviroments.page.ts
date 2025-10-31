import { Component, inject, OnInit } from '@angular/core';

import { B3AlertComponent } from '@b3/components/alert/alert.component';
import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { SeoService } from '@b3/shared/services/seo.service';

import { DocContentComponent } from '../../components/doc-content/doc-content.component';
import { DocHeadingComponent } from '../../components/doc-heading/doc-heading.component';
import { NavigationConfig } from '../../components/dynamic-anchor/dynamic-anchor.component';
import { EnvCardComponent } from '../../components/env-card/env-card.component';
import { ScrollSpyItemDirective } from '../../directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-enviroments',
  template: `
    <b3-content [navigationConfig]="navigationConfig" [activeAnchor]="activeAnchor" scrollSpy (scrollSpyChange)="activeAnchor = $event">
      <b3-doc-heading title="Installation" description="How to install dependencies and structure your app." scrollSpyItem="overview" id="overview"></b3-doc-heading>

      <section class="flex flex-col gap-8 sm:gap-10" scrollSpyItem="environments" id="environments">
        <div class="flex flex-col gap-6">
          <h2 class="font-heading mt-12 scroll-m-28 text-2xl font-medium tracking-tight first:mt-0 lg:mt-20">Pick Your Environment</h2>
          <p class="leading-relaxed">
            Start by selecting your environment of choice. Then, follow the instructions to install the dependencies and structure your app. zard/ui is designed to work seamlessly
            with Angular projects.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          @for (env of environments; track $index) {
            <div class="relative">
              <b3-env-card
                [name]="env.name"
                [path]="env.path"
                [icon]="env.icon"
                [disabled]="!env.available"
                [class]="!env.available ? 'opacity-50 pointer-events-none' : ''"
              ></b3-env-card>
              @if (!env.available) {
                <div class="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl">
                  <b3-badge zType="secondary">Coming Soon</b3-badge>
                </div>
              }
            </div>
          }
        </div>
        <b3-alert
          zTitle="Framework Support"
          class="bg-blue-500 dark:text-blue-100 dark:bg-blue-950 border dark:border-blue-800"
          zDescription="Angular is available now with full documentation and examples. Analog and Nx support are coming soon with dedicated guides and configurations."
          zAppearance="fill"
        />
      </section>
    </b3-content>
  `,
  standalone: true,
  imports: [EnvCardComponent, DocContentComponent, DocHeadingComponent, ScrollSpyDirective, ScrollSpyItemDirective, B3BadgeComponent, B3AlertComponent],
})
export class EnviromentsPage implements OnInit {
  protected readonly environments = [
    { name: 'angular', icon: 'angular.svg', path: '/docs/installation/angular', available: true },
    { name: 'nx', icon: 'nx.svg', path: '/docs/installation/nx', available: false },
    { name: 'analog.js', icon: 'analog.svg', path: '/docs/installation/analog', available: false },
  ];
  readonly navigationConfig: NavigationConfig = {
    items: [
      { id: 'overview', label: 'Overview', type: 'core' },
      { id: 'environments', label: 'Environments', type: 'custom' },
    ],
  };
  private readonly seoService = inject(SeoService);
  activeAnchor?: string;

  ngOnInit(): void {
    this.seoService.setDocsSeo(`Installation`, `How to install dependencies and structure your app.`, `/docs/installation`, 'og-install.jpg');
  }
}
