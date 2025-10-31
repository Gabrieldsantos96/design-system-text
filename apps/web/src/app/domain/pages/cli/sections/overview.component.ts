import { Component } from '@angular/core';

import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';

@Component({
  selector: 'cli-overview-section',
  standalone: true,
  imports: [MarkdownRendererComponent],
  template: ` <b3-markdown-renderer markdownUrl="/documentation/cli/overview.md"></b3-markdown-renderer> `,
})
export class CliOverviewSection {}
