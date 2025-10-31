import { ComponentType } from '@angular/cdk/overlay';
import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input, signal, ViewEncapsulation } from '@angular/core';

import { B3CardComponent } from '@b3/components/card/card.component';
import { MarkdownRendererComponent } from '@b3/domain/components/render/markdown-renderer.component';

import { HyphenToSpacePipe } from '../../../shared/pipes/hyphen-to-space.pipe';

@Component({
  selector: 'b3-code-box',
  imports: [NgComponentOutlet, B3CardComponent, MarkdownRendererComponent, HyphenToSpacePipe],
  templateUrl: './zard-code-box.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      b3-card.demo-card > div > * {
        min-width: 20rem;
        gap: 1rem;
        align-items: center;
        justify-content: center;
      }

      b3-card.demo-card.demo-flex > div > * {
        display: flex;
      }

      b3-card.demo-card.demo-grid > div > * {
        display: grid;
      }

      b3-card.demo-card.demo-full-width > div > * {
        width: 100%;
      }

      b3-card.demo-card.demo-full-width > div {
        width: 100%;
      }
    `,
  ],
})
export class B3CodeBoxComponent {
  readonly componentType = input<string>();
  readonly onlyDemo = input<boolean | undefined>(false);
  readonly fullWidth = input<boolean | undefined>(false);
  readonly fullScreen = input<boolean | undefined>(false);
  readonly flexAlign = input<'start' | 'center' | 'end' | undefined>('center');
  readonly column = input<boolean | undefined>(false);
  readonly path = input<string>();
  readonly dynamicComponent = input<ComponentType<unknown>>();
  activeTab = signal<'preview' | 'code'>('preview');

  readonly markdownUrl = computed(() => {
    const pathValue = this.path();
    if (!pathValue) return '';
    return `components/${pathValue}.md`;
  });

  readonly cardClasses = computed(() => {
    const classes = ['demo-card'];

    if (this.column()) {
      classes.push('demo-grid');
    } else {
      classes.push('demo-flex');
    }

    if (this.fullWidth()) {
      classes.push('demo-full-width');
    }

    if (this.flexAlign()) {
      classes.push(`items-${this.flexAlign()}`);
    }

    return classes.join(' ');
  });
}
