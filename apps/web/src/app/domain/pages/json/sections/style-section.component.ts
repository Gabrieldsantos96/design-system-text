import { Component } from '@angular/core';

import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';

@Component({
  selector: 'b3-json-style-section',
  standalone: true,
  imports: [MarkdownRendererComponent],
  template: `
    <section class="flex flex-col gap-6 sm:gap-8" scrollSpyItem="style" id="style">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="font-heading mt-12 scroll-m-28 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0 lg:mt-20">Style</h2>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed">The style for your components. Currently, <strong>B3/ui only supports the "css" style</strong>.</p>
        <b3-markdown-renderer markdownUrl="documentation/json/style-example.md"></b3-markdown-renderer>
      </div>
    </section>
  `,
})
export class JsonStyleSectionComponent {}
