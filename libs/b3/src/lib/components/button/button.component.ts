import { afterNextRender, ChangeDetectionStrategy, Component, computed, type OnDestroy, ElementRef, inject, input, signal, ViewEncapsulation } from '@angular/core';

import type { ClassValue } from 'clsx';

import { buttonVariants, type B3ButtonVariants } from './button.variants';
import { mergeClasses, transform } from '../../shared/utils/utils';
import { B3IconComponent } from '../icon/icon.component';

@Component({
  selector: 'b3-button, button[b3-button], a[b3-button]',
  exportAs: 'zButton',
  standalone: true,
  imports: [B3IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (zLoading()) {
      <i b3-icon zType="loader-circle" class="animate-spin duration-2000"></i>
    }
    <ng-content></ng-content>
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-icon-only]': 'iconOnly() || null',
  },
})
export class B3ButtonComponent implements OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly zType = input<B3ButtonVariants['zType']>('default');
  readonly zSize = input<B3ButtonVariants['zSize']>('default');
  readonly zShape = input<B3ButtonVariants['zShape']>('default');
  readonly class = input<ClassValue>('');
  readonly zFull = input(false, { transform });
  readonly zLoading = input(false, { transform });

  private readonly iconOnlyState = signal(false);
  readonly iconOnly = this.iconOnlyState.asReadonly();

  private _mutationObserver: MutationObserver | null = null;

  constructor() {
    afterNextRender(() => {
      const check = () => {
        const el = this.elementRef.nativeElement;
        const hasIcon = el.querySelector('b3-icon, [b3-icon]') !== null;
        const children = Array.from<Node>(el.childNodes);
        const hasText = children.some(node => {
          if (node.nodeType === 3) {
            return node.textContent?.trim() !== '';
          }
          if (node.nodeType === 1) {
            const element = node as HTMLElement;
            if (element.matches('b3-icon, [b3-icon]')) return false;
            return element.textContent?.trim() !== '';
          }
          return false;
        });

        this.iconOnlyState.set(hasIcon && !hasText);
      };

      check();
      this._mutationObserver = new MutationObserver(check);
      this._mutationObserver.observe(this.elementRef.nativeElement, { childList: true, characterData: true, subtree: true });
    });
  }

  ngOnDestroy(): void {
    if (this._mutationObserver) {
      this._mutationObserver.disconnect();
      this._mutationObserver = null;
    }
  }

  protected readonly classes = computed(() =>
    mergeClasses(
      buttonVariants({
        zType: this.zType(),
        zSize: this.zSize(),
        zShape: this.zShape(),
        zFull: this.zFull(),
        zLoading: this.zLoading(),
      }),
      this.class(),
    ),
  );
}
