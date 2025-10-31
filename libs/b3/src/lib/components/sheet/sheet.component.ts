import { OverlayModule } from '@angular/cdk/overlay';
import { BasePortalOutlet, CdkPortalOutlet, type ComponentPortal, PortalModule, type TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  type ComponentRef,
  computed,
  ElementRef,
  type EmbeddedViewRef,
  type EventEmitter,
  inject,
  output,
  signal,
  type TemplateRef,
  type Type,
  viewChild,
  type ViewContainerRef,
} from '@angular/core';

import type { B3SheetRef } from './sheet-ref';
import { sheetVariants, type B3SheetVariants } from './sheet.variants';
import { mergeClasses, noopFun } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';
import { B3IconComponent } from '../icon/icon.component';
import type { B3Icon } from '../icon/icons';

export type OnClickCallback<T> = (instance: T) => false | void | object;
export class B3SheetOptions<T, U> {
  zCancelIcon?: B3Icon;
  zCancelText?: string | null;
  zClosable?: boolean;
  zContent?: string | TemplateRef<T> | Type<T>;
  zCustomClasses?: string;
  zData?: U;
  zDescription?: string;
  zHeight?: string;
  zHideFooter?: boolean;
  zMaskClosable?: boolean;
  zOkDestructive?: boolean;
  zOkDisabled?: boolean;
  zOkIcon?: B3Icon;
  zOkText?: string | null;
  zOnCancel?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zOnOk?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zSide?: B3SheetVariants['zSide'] = 'left';
  zSize?: B3SheetVariants['zSize'] = 'default';
  zTitle?: string | TemplateRef<T>;
  zViewContainerRef?: ViewContainerRef;
  zWidth?: string;
}

@Component({
  selector: 'b3-sheet',
  exportAs: 'zSheet',
  imports: [OverlayModule, PortalModule, B3ButtonComponent, B3IconComponent],
  template: `
    @if (config.zClosable || config.zClosable === undefined) {
      <button data-testid="b3-close-header-button" b3-button zType="ghost" zSize="sm" class="absolute right-1 top-1 cursor-pointer " (click)="onCloseClick()">
        <b3-icon zType="x" />
      </button>
    }

    @if (config.zTitle || config.zDescription) {
      <header data-slot="sheet-header" class="flex flex-col gap-1.5 p-4">
        @if (config.zTitle) {
          <h4 data-testid="b3-title" data-slot="sheet-title" class="text-lg font-semibold leading-none tracking-tight">{{ config.zTitle }}</h4>

          @if (config.zDescription) {
            <p data-testid="b3-description" data-slot="sheet-description" class="text-sm text-muted-foreground">{{ config.zDescription }}</p>
          }
        }
      </header>
    }

    <main class="flex flex-col space-y-4 w-full">
      <ng-template cdkPortalOutlet></ng-template>

      @if (isStringContent) {
        <div data-testid="b3-content" data-slot="sheet-content" [innerHTML]="config.zContent"></div>
      }
    </main>

    @if (!config.zHideFooter) {
      <footer data-slot="sheet-footer" class="mt-auto flex flex-col gap-2 p-4">
        @if (config.zOkText !== null) {
          <button
            data-testid="b3-ok-button"
            class="cursor-pointer"
            b3-button
            [zType]="config.zOkDestructive ? 'destructive' : 'default'"
            [disabled]="config.zOkDisabled"
            (click)="onOkClick()"
          >
            @if (config.zOkIcon) {
              <b3-icon [zType]="config.zOkIcon" />
            }

            {{ config.zOkText ?? 'OK' }}
          </button>
        }

        @if (config.zCancelText !== null) {
          <button data-testid="b3-cancel-button" class="cursor-pointer" b3-button zType="outline" (click)="onCloseClick()">
            @if (config.zCancelIcon) {
              <b3-icon [zType]="config.zCancelIcon" />
            }

            {{ config.zCancelText ?? 'Cancel' }}
          </button>
        }
      </footer>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'data-slot': 'sheet',
    '[class]': 'classes()',
    '[attr.data-state]': 'state()',
    '[style.width]': 'config.zWidth ? config.zWidth + " !important" : null',
    '[style.height]': 'config.zHeight ? config.zHeight + " !important" : null',
  },
})
export class B3SheetComponent<T, U> extends BasePortalOutlet {
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly config = inject(B3SheetOptions<T, U>);

  protected readonly classes = computed(() => {
    const zSize = this.config.zWidth || this.config.zHeight ? 'custom' : this.config.zSize;

    return mergeClasses(
      sheetVariants({
        zSide: this.config.zSide,
        zSize,
      }),
      this.config.zCustomClasses,
    );
  });
  public sheetRef?: B3SheetRef<T>;

  protected readonly isStringContent = typeof this.config.zContent === 'string';

  readonly portalOutlet = viewChild.required(CdkPortalOutlet);

  readonly okTriggered = output<void>();
  readonly cancelTriggered = output<void>();
  readonly state = signal<'closed' | 'open'>('closed');

  constructor() {
    super();
  }

  getNativeElement(): HTMLElement {
    return this.host.nativeElement;
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this.portalOutlet()?.hasAttached()) {
      throw new Error('Attempting to attach modal content after content is already attached');
    }
    return this.portalOutlet()?.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this.portalOutlet()?.hasAttached()) {
      throw new Error('Attempting to attach modal content after content is already attached');
    }

    return this.portalOutlet()?.attachTemplatePortal(portal);
  }

  onOkClick() {
    this.okTriggered.emit();
  }

  onCloseClick() {
    this.cancelTriggered.emit();
  }
}
