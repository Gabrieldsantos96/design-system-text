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
  NgModule,
  output,
  type TemplateRef,
  type Type,
  viewChild,
  type ViewContainerRef,
} from '@angular/core';

import type { B3DialogRef } from './dialog-ref';
import { B3DialogService } from './dialog.service';
import { dialogVariants } from './dialog.variants';
import { mergeClasses, noopFun } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';
import { B3IconComponent } from '../icon/icon.component';
import type { B3Icon } from '../icon/icons';
// Used by the NgModule provider definition

export type OnClickCallback<T> = (instance: T) => false | void | object;
export class B3DialogOptions<T, U> {
  zCancelIcon?: B3Icon;
  zCancelText?: string | null;
  zClosable?: boolean;
  zContent?: string | TemplateRef<T> | Type<T>;
  zCustomClasses?: string;
  zData?: U;
  zDescription?: string;
  zHideFooter?: boolean;
  zMaskClosable?: boolean;
  zOkDestructive?: boolean;
  zOkDisabled?: boolean;
  zOkIcon?: B3Icon;
  zOkText?: string | null;
  zOnCancel?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zOnOk?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zTitle?: string | TemplateRef<T>;
  zViewContainerRef?: ViewContainerRef;
  zWidth?: string;
}

@Component({
  selector: 'b3-dialog',
  exportAs: 'zDialog',
  imports: [OverlayModule, PortalModule, B3ButtonComponent, B3IconComponent],
  template: `
    @if (config.zClosable || config.zClosable === undefined) {
      <button data-testid="b3-close-header-button" b3-button zType="ghost" zSize="sm" class="absolute right-1 top-1" (click)="onCloseClick()">
        <b3-icon zType="x" />
      </button>
    }

    @if (config.zTitle || config.zDescription) {
      <header class="flex flex-col space-y-1.5 text-center sm:text-left">
        @if (config.zTitle) {
          <h4 data-testid="b3-title" class="text-lg font-semibold leading-none tracking-tight">{{ config.zTitle }}</h4>

          @if (config.zDescription) {
            <p data-testid="b3-description" class="text-sm text-muted-foreground">{{ config.zDescription }}</p>
          }
        }
      </header>
    }

    <main class="flex flex-col space-y-4">
      <ng-template cdkPortalOutlet></ng-template>

      @if (isStringContent) {
        <div data-testid="b3-content" [innerHTML]="config.zContent"></div>
      }
    </main>

    @if (!config.zHideFooter) {
      <footer class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-0 sm:space-x-2">
        @if (config.zCancelText !== null) {
          <button data-testid="b3-cancel-button" b3-button zType="outline" (click)="onCloseClick()">
            @if (config.zCancelIcon) {
              <b3-icon [zType]="config.zCancelIcon" />
            }

            {{ config.zCancelText ?? 'Cancel' }}
          </button>
        }

        @if (config.zOkText !== null) {
          <button data-testid="b3-ok-button" b3-button [zType]="config.zOkDestructive ? 'destructive' : 'default'" [disabled]="config.zOkDisabled" (click)="onOkClick()">
            @if (config.zOkIcon) {
              <b3-icon [zType]="config.zOkIcon" />
            }

            {{ config.zOkText ?? 'OK' }}
          </button>
        }
      </footer>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[style.width]': 'config.zWidth ? config.zWidth : null',
    'animate.enter': 'dialog-enter',
    'animate.leave': 'dialog-leave',
  },
  styles: [
    `
      :host {
        opacity: 1;
        transform: scale(1);
        transition:
          opacity 150ms ease-out,
          transform 150ms ease-out;
      }

      @starting-style {
        :host {
          opacity: 0;
          transform: scale(0.9);
        }
      }

      :host.dialog-leave {
        opacity: 0;
        transform: scale(0.9);
        transition:
          opacity 150ms ease-in,
          transform 150ms ease-in;
      }
    `,
  ],
})
export class B3DialogComponent<T, U> extends BasePortalOutlet {
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly config = inject(B3DialogOptions<T, U>);

  protected readonly classes = computed(() => mergeClasses(dialogVariants(), this.config.zCustomClasses));
  public dialogRef?: B3DialogRef<T>;

  protected readonly isStringContent = typeof this.config.zContent === 'string';

  readonly portalOutlet = viewChild.required(CdkPortalOutlet);

  okTriggered = output<void>();
  cancelTriggered = output<void>();

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

@NgModule({
  imports: [B3ButtonComponent, B3DialogComponent, OverlayModule, PortalModule],
  providers: [B3DialogService],
})
export class B3DialogModule {}
