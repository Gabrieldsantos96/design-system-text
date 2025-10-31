import { Component, input, signal } from '@angular/core';

import { B3DividerComponent } from '@b3/components/divider/divider.component';
import { B3Icon } from '@b3/components/icon/icons';
import { B3SegmentedComponent } from '@b3/components/segmented/segmented.component';
import { B3ToggleGroupComponent } from '@b3/components/toggle-group/toggle-group.component';

import { BlockCodeViewerComponent } from '../block-code-viewer/block-code-viewer.component';
import { BlockPreviewComponent } from '../block-preview/block-preview.component';

export interface BlockFile {
  name: string;
  path: string;
  content: string;
  language: string;
}

export interface Block {
  id: string;
  title: string;
  description: string;
  component: any;
  files: BlockFile[];
  category?: string;
  image?: {
    light: string;
    dark: string;
  };
}

export interface FileTreeNode {
  name: string;
  type: 'file' | 'folder';
  path?: string;
  children?: FileTreeNode[];
  file?: BlockFile;
}

export interface ViewportOption {
  value: string;
  ariaLabel: string;
  icon: B3Icon;
}

@Component({
  selector: 'b3-block-container',
  standalone: true,
  imports: [B3SegmentedComponent, B3DividerComponent, B3ToggleGroupComponent, BlockPreviewComponent, BlockCodeViewerComponent],
  templateUrl: './block-container.component.html',
})
export class BlockContainerComponent {
  readonly block = input.required<Block>();

  protected readonly activeTab = signal<'preview' | 'code'>('preview');
  protected readonly viewportSize = signal<'desktop' | 'tablet' | 'mobile'>('desktop');

  protected readonly tabOptions = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
  ];

  protected readonly viewportOptions: ViewportOption[] = [
    { value: 'desktop', ariaLabel: 'Desktop view', icon: 'monitor' },
    { value: 'tablet', ariaLabel: 'Tablet view', icon: 'tablet' },
    { value: 'mobile', ariaLabel: 'Mobile view', icon: 'smartphone' },
  ];

  protected onTabChange(value: string): void {
    this.activeTab.set(value as 'preview' | 'code');
  }

  protected onViewportChange(value: string | string[]): void {
    if (typeof value === 'string') {
      this.viewportSize.set(value as 'desktop' | 'tablet' | 'mobile');
    }
  }
}
