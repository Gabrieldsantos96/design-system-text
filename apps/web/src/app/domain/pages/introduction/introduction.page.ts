import { Component, inject, type OnInit } from '@angular/core';

import { DocContentComponent } from '@b3/domain/components/doc-content/doc-content.component';
import { DocHeadingComponent } from '@b3/domain/components/doc-heading/doc-heading.component';
import { NavigationConfig } from '@b3/domain/components/dynamic-anchor/dynamic-anchor.component';
import { SeoService } from '@b3/shared/services/seo.service';

import { AIReadySection } from './sections/ai-ready.component';
import { CLISection } from './sections/cli.component';
import { OpenSourceSection } from './sections/open-source.component';
import { SupportSection } from './sections/support.component';
import { WhyB3UISection } from './sections/why-zardui.component';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-introduction',
  standalone: true,
  imports: [
    DocContentComponent,
    DocHeadingComponent,
    ScrollSpyDirective,
    WhyB3UISection,
    CLISection,
    AIReadySection,
    OpenSourceSection,
    SupportSection,
  ],
  template: `
    <b3-content [title]="title" [navigationConfig]="navigationConfig" [activeAnchor]="activeAnchor" scrollSpy (scrollSpyChange)="activeAnchor = $event">
      <b3-doc-heading
        title="Introdução"
        description="Construída para desenvolvedores Angular que valorizam design e funcionalidade. A B3UI une estética institucional com implementação prática e robusta."
        scrollSpyItem="overview"
        id="overview"
      >
      </b3-doc-heading>

      <why-zardui-section scrollSpyItem="por-que-b3ui" id="por-que-b3ui"></why-zardui-section>
      <cli-section scrollSpyItem="cli" id="cli"></cli-section>
      <ai-ready-section scrollSpyItem="pronta-para-ia" id="pronta-para-ia"></ai-ready-section>
      <open-source-section scrollSpyItem="open-source" id="open-source"></open-source-section>
      <support-section scrollSpyItem="suporte" id="suporte"></support-section>
    </b3-content>
  `,
})
export class IntroductionPage implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly title = 'Introdução - B3/UI';
  activeAnchor?: string;

  readonly navigationConfig: NavigationConfig = {
    items: [
      { id: 'overview', label: 'Visão Geral', type: 'core' },
      { id: 'por-que-b3ui', label: 'Por que B3/UI', type: 'custom' },
      { id: 'cli', label: 'CLI', type: 'custom' },
      { id: 'pronta-para-ia', label: 'Pronta para IA', type: 'custom' },
      { id: 'open-source', label: 'Open Source', type: 'custom' },
      { id: 'suporte', label: 'Suporte', type: 'custom' },
    ],
  };

  ngOnInit(): void {
    this.seoService.setDocsSeo(
      'Introdução',
      'Construída para desenvolvedores Angular que valorizam design e funcionalidade. A B3UI une estética institucional com implementação prática e robusta.',
      '/docs/introducao',
      'og-introducao.jpg',
    );
  }
}