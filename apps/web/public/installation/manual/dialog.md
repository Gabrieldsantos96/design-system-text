

```angular-ts title="dialog.component.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
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

```



```angular-ts title="dialog.variants.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { cva, type VariantProps } from 'class-variance-authority';

export const dialogVariants = cva(
  'fixed left-[50%] top-[50%] b3-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg rounded-lg max-w-[calc(100%-2rem)] sm:max-w-[425px]',
);
export type B3DialogVariants = VariantProps<typeof dialogVariants>;

```



```angular-ts title="dialog-ref.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';

import type { OverlayRef } from '@angular/cdk/overlay';
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Inject, PLATFORM_ID } from '@angular/core';

import type { B3DialogComponent, B3DialogOptions } from './dialog.component';

const enum eTriggerAction {
  CANCEL = 'cancel',
  OK = 'ok',
}

export class B3DialogRef<T = any, R = any, U = any> {
  private destroy$ = new Subject<void>();
  private isClosing = false;
  protected result?: R;
  componentInstance: T | null = null;

  constructor(
    private overlayRef: OverlayRef,
    private config: B3DialogOptions<T, U>,
    private containerInstance: B3DialogComponent<T, U>,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.containerInstance.cancelTriggered.subscribe(() => this.trigger(eTriggerAction.CANCEL));
    this.containerInstance.okTriggered.subscribe(() => this.trigger(eTriggerAction.OK));

    if ((this.config.zMaskClosable ?? true) && isPlatformBrowser(this.platformId)) {
      this.overlayRef
        .outsidePointerEvents()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.close());
    }

    if (isPlatformBrowser(this.platformId)) {
      fromEvent<KeyboardEvent>(document, 'keydown')
        .pipe(
          filter(event => event.key === 'Escape'),
          takeUntil(this.destroy$),
        )
        .subscribe(() => this.close());
    }
  }

  close(result?: R) {
    if (this.isClosing) {
      return;
    }

    this.isClosing = true;
    this.result = result;

    const hostElement = this.containerInstance.getNativeElement();
    hostElement.classList.add('dialog-leave');

    setTimeout(() => {
      if (this.overlayRef) {
        if (this.overlayRef.hasAttached()) {
          this.overlayRef.detachBackdrop();
        }
        this.overlayRef.dispose();
      }

      if (!this.destroy$.closed) {
        this.destroy$.next();
        this.destroy$.complete();
      }
    }, 150);
  }

  private trigger(action: eTriggerAction) {
    const trigger = { ok: this.config.zOnOk, cancel: this.config.zOnCancel }[action];

    if (trigger instanceof EventEmitter) {
      trigger.emit(this.getContentComponent());
    } else if (typeof trigger === 'function') {
      const result = trigger(this.getContentComponent()) as R;
      this.closeWithResult(result);
    } else {
      this.close();
    }
  }

  private getContentComponent(): T {
    return this.componentInstance as T;
  }

  private closeWithResult(result: R): void {
    if (result !== false) {
      this.close(result);
    }
  }
}

```



```angular-ts title="dialog.service.ts" expandable="true" expandableTitle="Expand" copyButton showLineNumbers
import { type ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, Injector, PLATFORM_ID, TemplateRef } from '@angular/core';
import { B3DialogRef } from './dialog-ref';
import { B3DialogComponent, B3DialogOptions } from './dialog.component';

type ContentType<T> = ComponentType<T> | TemplateRef<T> | string;

export const Z_MODAL_DATA = new InjectionToken<any>('Z_MODAL_DATA');

@Injectable({
  providedIn: 'root',
})
export class B3DialogService {
  private overlay = inject(Overlay);
  private injector = inject(Injector);
  private platformId = inject(PLATFORM_ID);

  create<T, U>(config: B3DialogOptions<T, U>): B3DialogRef<T> {
    return this.open<T, U>(config.zContent as ComponentType<T>, config);
  }

  private open<T, U>(componentOrTemplateRef: ContentType<T>, config: B3DialogOptions<T, U>) {
    const overlayRef = this.createOverlay();

    if (!overlayRef) {
      return new B3DialogRef(undefined as any, config, undefined as any, this.platformId);
    }

    const dialogContainer = this.attachDialogContainer<T, U>(overlayRef, config);
    const dialogRef = this.attachDialogContent<T, U>(componentOrTemplateRef, dialogContainer, overlayRef, config);

    dialogContainer.dialogRef = dialogRef;

    return dialogRef;
  }

  private createOverlay(): OverlayRef | undefined {
    if (isPlatformBrowser(this.platformId)) {
      const overlayConfig = new OverlayConfig({
        hasBackdrop: true,
        positionStrategy: this.overlay.position().global(),
      });

      return this.overlay.create(overlayConfig);
    }

    return undefined;
  }

  private attachDialogContainer<T, U>(overlayRef: OverlayRef, config: B3DialogOptions<T, U>) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: OverlayRef, useValue: overlayRef },
        { provide: B3DialogOptions, useValue: config },
      ],
    });

    const containerPortal = new ComponentPortal<B3DialogComponent<T, U>>(B3DialogComponent, config.zViewContainerRef, injector);

    const containerRef = overlayRef.attach<B3DialogComponent<T, U>>(containerPortal);

    return containerRef.instance;
  }

  private attachDialogContent<T, U>(componentOrTemplateRef: ContentType<T>, dialogContainer: B3DialogComponent<T, U>, overlayRef: OverlayRef, config: B3DialogOptions<T, U>) {
    const dialogRef = new B3DialogRef<T>(overlayRef, config, dialogContainer, this.platformId);

    if (componentOrTemplateRef instanceof TemplateRef) {
      dialogContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!, {
          dialogRef: dialogRef,
        } as any),
      );
    } else if (typeof componentOrTemplateRef !== 'string') {
      const injector = this.createInjector<T, U>(dialogRef, config);
      const contentRef = dialogContainer.attachComponentPortal<T>(new ComponentPortal(componentOrTemplateRef, config.zViewContainerRef, injector));
      dialogRef.componentInstance = contentRef.instance;
    }

    return dialogRef;
  }

  private createInjector<T, U>(dialogRef: B3DialogRef<T>, config: B3DialogOptions<T, U>) {
    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: B3DialogRef, useValue: dialogRef },
        { provide: Z_MODAL_DATA, useValue: config.zData },
      ],
    });
  }
}

```

