import { Component } from '@angular/core';

import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';

@Component({
  selector: 'b3-json-current-structure-section',
  standalone: true,
  imports: [MarkdownRendererComponent],
  template: `
    <section class="flex flex-col gap-6 sm:gap-8" scrollSpyItem="current-structure" id="current-structure">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="font-heading mt-12 scroll-m-28 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0 lg:mt-20">Current B3/ui components.json</h2>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Here's the current <code class="bg-muted px-1.5 py-0.5 rounded text-xs sm:text-sm">components.json</code> structure that B3/ui supports:
        </p>
        <b3-markdown-renderer markdownUrl="documentation/json/current-structure-example.md"></b3-markdown-renderer>
      </div>
    </section>
  `,
})
export class JsonCurrentStructureSectionComponent {}
