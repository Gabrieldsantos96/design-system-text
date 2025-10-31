import { Component, inject, type OnInit } from '@angular/core';

import { B3AlertComponent } from '@b3/components/alert/alert.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { SeoService } from '@b3/shared/services/seo.service';

import { DarkModeService } from '../../../shared/services/darkmode.service';
import { DocContentComponent } from '../../components/doc-content/doc-content.component';
import { DocHeadingComponent } from '../../components/doc-heading/doc-heading.component';
import { NavigationConfig } from '../../components/dynamic-anchor/dynamic-anchor.component';
import { MarkdownRendererComponent } from '../../components/render/markdown-renderer.component';
import { ScrollSpyItemDirective } from '../../directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-darkmode',
  standalone: true,
  imports: [DocContentComponent, DocHeadingComponent, ScrollSpyDirective, ScrollSpyItemDirective, MarkdownRendererComponent, B3ButtonComponent, B3CardComponent, B3AlertComponent],
  templateUrl: './dark-mode.page.html',
})
export class DarkmodePage implements OnInit {
  activeAnchor?: string;

  private readonly darkModeService = inject(DarkModeService);
  private readonly seoService = inject(SeoService);

  readonly navigationConfig: NavigationConfig = {
    items: [
      { id: 'overview', label: 'Overview', type: 'core' },
      { id: 'current-implementation', label: 'Current Implementation', type: 'core' },
      { id: 'service-details', label: 'DarkMode Service', type: 'core' },
      { id: 'usage-in-app', label: 'Usage in Application', type: 'core' },
      { id: 'demo', label: 'Interactive Demo', type: 'custom' },
    ],
  };

  getCurrentTheme(): 'light' | 'dark' {
    return this.darkModeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.darkModeService.toggleTheme();
  }

  ngOnInit(): void {
    this.seoService.setDocsSeo('Dark Mode', 'Adding dark mode to your site.', '/docs/dark-mode', 'og-darkmode.jpg');
  }
}
