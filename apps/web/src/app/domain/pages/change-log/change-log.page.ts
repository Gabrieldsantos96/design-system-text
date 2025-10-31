import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';

import { B3AlertComponent } from '@b3/components/alert/alert.component';
import { B3LoaderComponent } from '@b3/components/loader/loader.component';
import { DocContentComponent } from '@b3/domain/components/doc-content/doc-content.component';
import { DocHeadingComponent } from '@b3/domain/components/doc-heading/doc-heading.component';
import { NavigationConfig } from '@b3/domain/components/dynamic-anchor/dynamic-anchor.component';
import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';
import { SeoService } from '@b3/shared/services/seo.service';

import { ChangelogService, type ChangelogEntry } from './services/changelog.service';
import { ScrollSpyItemDirective } from '../../directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-changelog',
  standalone: true,
  imports: [CommonModule, DocContentComponent, DocHeadingComponent, ScrollSpyDirective, ScrollSpyItemDirective, B3AlertComponent, B3LoaderComponent, MarkdownRendererComponent],
  templateUrl: './change-log.page.html',
})
export class ChangeLogPage implements OnInit {
  private readonly changelogService = inject(ChangelogService);
  private readonly seoService = inject(SeoService);

  readonly title = 'Changelog - b3/ui';
  activeAnchor?: string;

  readonly entries = signal<ChangelogEntry[]>([]);
  readonly isLoading = signal(false);

  readonly navigationConfig = computed<NavigationConfig>(() => {
    const items = [{ id: 'overview', label: 'Overview', type: 'core' as const }];

    const entryItems = this.entries().map(entry => ({
      id: entry.id,
      label: entry.date,
      type: 'core' as const,
    }));

    return { items: [...items, ...entryItems] };
  });

  async ngOnInit() {
    this.seoService.setDocsSeo('Changelog', 'Latest updates and announcements.', '/docs/changelog', 'og-changelog.jpg');
    await this.loadAllEntries();
  }

  private async loadAllEntries() {
    if (this.isLoading()) return;

    this.isLoading.set(true);

    try {
      const allEntries = await this.changelogService.loadAllEntries();
      this.entries.set(allEntries);
    } catch (error) {
      console.error('Error loading changelog entries:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  trackByEntry(_: number, entry: ChangelogEntry): string {
    return entry.id;
  }

  async onAnchorClick(anchorId: string) {
    return;
  }
}
