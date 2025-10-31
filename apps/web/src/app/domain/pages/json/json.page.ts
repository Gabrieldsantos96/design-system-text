import { Component, inject, type OnInit } from '@angular/core';

import { SeoService } from '@b3/shared/services/seo.service';

import { JsonAliasesSectionComponent } from './sections/aliases-section.component';
import { JsonCurrentStructureSectionComponent } from './sections/current-structure-section.component';
import { JsonIntroductionSectionComponent } from './sections/introduction-section.component';
import { JsonPackageManagerSectionComponent } from './sections/package-manager-section.component';
import { JsonStyleSectionComponent } from './sections/style-section.component';
import { JsonTailwindSectionComponent } from './sections/tailwind-section.component';
import { DocContentComponent } from '../../components/doc-content/doc-content.component';
import { DocHeadingComponent } from '../../components/doc-heading/doc-heading.component';
import { NavigationConfig } from '../../components/dynamic-anchor/dynamic-anchor.component';
import { ScrollSpyItemDirective } from '../../directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-json',
  standalone: true,
  imports: [
    DocContentComponent,
    DocHeadingComponent,
    ScrollSpyDirective,
    ScrollSpyItemDirective,
    JsonIntroductionSectionComponent,
    JsonStyleSectionComponent,
    JsonPackageManagerSectionComponent,
    JsonTailwindSectionComponent,
    JsonAliasesSectionComponent,
    JsonCurrentStructureSectionComponent,
  ],
  template: `
    <b3-content [title]="title" [navigationConfig]="navigationConfig" [activeAnchor]="activeAnchor" scrollSpy (scrollSpyChange)="activeAnchor = $event">
      <b3-doc-heading title="components.json" description="Configuration for your project." scrollSpyItem="overview" id="overview"> </b3-doc-heading>

      <b3-json-introduction-section />
      <b3-json-style-section />
      <b3-json-package-manager-section />
      <b3-json-tailwind-section />
      <b3-json-aliases-section />
      <b3-json-current-structure-section />
    </b3-content>
  `,
})
export class JsonPage implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly title = 'components.json - b3/ui';
  activeAnchor?: string;

  readonly navigationConfig: NavigationConfig = {
    items: [
      { id: 'overview', label: 'Overview', type: 'core' },
      { id: 'style', label: 'Style', type: 'custom' },
      { id: 'package-manager', label: 'Package Manager', type: 'custom' },
      { id: 'tailwind', label: 'Tailwind', type: 'custom' },
      { id: 'aliases', label: 'Aliases', type: 'custom' },
      { id: 'current-structure', label: 'Current Structure', type: 'custom' },
    ],
  };

  ngOnInit(): void {
    this.seoService.setDocsSeo(
      'components.json',
      'Configuration file for your B3 UI project. Customize styles, paths, package manager, Tailwind config, and component aliases.',
      '/docs/components-json',
      'og-componentsjson.jpg',
    );
  }
}
