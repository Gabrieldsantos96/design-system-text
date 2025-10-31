import { Component } from '@angular/core';

import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';

@Component({
  selector: 'cli-commands-section',
  standalone: true,
  imports: [MarkdownRendererComponent],
  template: ` <b3-markdown-renderer markdownUrl="/documentation/cli/commands.md"></b3-markdown-renderer> `,
})
export class CliCommandsSection {}
