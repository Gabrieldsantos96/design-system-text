import { type ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, Injector, PLATFORM_ID, TemplateRef } from '@angular/core';

import { B3AlertDialogRef } from './alert-dialog-ref';
import { B3AlertDialogComponent, B3AlertDialogOptions } from './alert-dialog.component';

type ContentType<T> = ComponentType<T> | TemplateRef<T> | string | undefined;

export const Z_ALERT_MODAL_DATA = new InjectionToken<unknown>('Z_ALERT_MODAL_DATA');

@Injectable({
  providedIn: 'root',
})
export class B3AlertDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly platformId = inject(PLATFORM_ID);

  create<T>(config: B3AlertDialogOptions<T>): B3AlertDialogRef<T> {
    return this.open<T>(config.zContent, config);
  }

  confirm<T>(
    config: Omit<B3AlertDialogOptions<T>, 'zOkText' | 'zCancelText'> & {
      zOkText?: string;
      zCancelText?: string;
    },
  ): B3AlertDialogRef<T> {
    const confirmConfig: B3AlertDialogOptions<T> = {
      ...config,
      zOkText: config.zOkText ?? 'Confirm',
      zCancelText: config.zCancelText ?? 'Cancel',
      zOkDestructive: config.zOkDestructive ?? false,
    };
    return this.create(confirmConfig);
  }

  warning<T>(config: Omit<B3AlertDialogOptions<T>, 'zOkText'> & { zOkText?: string }): B3AlertDialogRef<T> {
    const warningConfig: B3AlertDialogOptions<T> = {
      ...config,
      zOkText: config.zOkText ?? 'OK',
      zCancelText: null,
    };
    return this.create(warningConfig);
  }

  info<T>(config: Omit<B3AlertDialogOptions<T>, 'zOkText'> & { zOkText?: string }): B3AlertDialogRef<T> {
    const infoConfig: B3AlertDialogOptions<T> = {
      ...config,
      zOkText: config.zOkText ?? 'OK',
      zCancelText: null,
    };
    return this.create(infoConfig);
  }

  private open<T>(componentOrTemplateRef: ContentType<T>, config: B3AlertDialogOptions<T>) {
    const overlayRef = this.createOverlay();

    if (!overlayRef) {
      return new B3AlertDialogRef(undefined as any, config, undefined as any);
    }

    const alertDialogContainer = this.attachAlertDialogContainer<T>(overlayRef, config);
    const alertDialogRef = this.attachAlertDialogContent<T>(componentOrTemplateRef, alertDialogContainer, overlayRef, config);

    alertDialogContainer.alertDialogRef = alertDialogRef;

    return alertDialogRef;
  }

  private createOverlay(): OverlayRef | undefined {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy: this.overlay.position().global(),
    });

    return this.overlay.create(overlayConfig);
  }

  private attachAlertDialogContainer<T>(overlayRef: OverlayRef, config: B3AlertDialogOptions<T>) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: OverlayRef, useValue: overlayRef },
        { provide: B3AlertDialogOptions, useValue: config },
      ],
    });

    const containerPortal = new ComponentPortal<B3AlertDialogComponent<T>>(B3AlertDialogComponent, config.zViewContainerRef, injector);

    const containerRef = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private attachAlertDialogContent<T>(
    componentOrTemplateRef: ContentType<T>,
    alertDialogContainer: B3AlertDialogComponent<T>,
    overlayRef: OverlayRef,
    config: B3AlertDialogOptions<T>,
  ) {
    const alertDialogRef = new B3AlertDialogRef<T>(overlayRef, config, alertDialogContainer);

    if (componentOrTemplateRef instanceof TemplateRef) {
      alertDialogContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!, {
          alertDialogRef,
        } as any),
      );
    } else if (componentOrTemplateRef && typeof componentOrTemplateRef !== 'string') {
      const injector = this.createInjector<T>(alertDialogRef, config);
      const contentRef = alertDialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.zViewContainerRef, injector));
      alertDialogRef.componentInstance = contentRef.instance;
    }

    return alertDialogRef;
  }

  private createInjector<T>(alertDialogRef: B3AlertDialogRef<T>, config: B3AlertDialogOptions<T>) {
    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: B3AlertDialogRef, useValue: alertDialogRef },
        { provide: Z_ALERT_MODAL_DATA, useValue: config.zData },
      ],
    });
  }
}
