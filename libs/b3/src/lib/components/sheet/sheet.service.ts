import { type ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, Injector, PLATFORM_ID, TemplateRef } from '@angular/core';

import { B3SheetRef } from './sheet-ref';
import { B3SheetComponent, B3SheetOptions } from './sheet.component';

type ContentType<T> = ComponentType<T> | TemplateRef<T> | string;
export const Z_MODAL_DATA = new InjectionToken<any>('Z_MODAL_DATA');

@Injectable({
  providedIn: 'root',
})
export class B3SheetService {
  private overlay = inject(Overlay);
  private injector = inject(Injector);
  private platformId = inject(PLATFORM_ID);

  create<T, U>(config: B3SheetOptions<T, U>): B3SheetRef<T> {
    return this.open<T, U>(config.zContent as ComponentType<T>, config);
  }

  private open<T, U>(componentOrTemplateRef: ContentType<T>, config: B3SheetOptions<T, U>) {
    const overlayRef = this.createOverlay();

    if (!overlayRef) {
      // Return a mock sheet ref for SSR environments
      return new B3SheetRef(undefined as any, config, undefined as any, this.platformId);
    }

    const sheetContainer = this.attachSheetContainer<T, U>(overlayRef, config);

    const sheetRef = this.attachSheetContent<T, U>(componentOrTemplateRef, sheetContainer, overlayRef, config);
    sheetContainer.sheetRef = sheetRef;

    return sheetRef;
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

  private attachSheetContainer<T, U>(overlayRef: OverlayRef, config: B3SheetOptions<T, U>) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: OverlayRef, useValue: overlayRef },
        { provide: B3SheetOptions, useValue: config },
      ],
    });

    const containerPortal = new ComponentPortal<B3SheetComponent<T, U>>(B3SheetComponent, config.zViewContainerRef, injector);
    const containerRef = overlayRef.attach<B3SheetComponent<T, U>>(containerPortal);
    containerRef.instance.state.set('open');

    return containerRef.instance;
  }

  private attachSheetContent<T, U>(componentOrTemplateRef: ContentType<T>, sheetContainer: B3SheetComponent<T, U>, overlayRef: OverlayRef, config: B3SheetOptions<T, U>) {
    const sheetRef = new B3SheetRef<T>(overlayRef, config, sheetContainer, this.platformId);

    if (componentOrTemplateRef instanceof TemplateRef) {
      sheetContainer.attachTemplatePortal(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        new TemplatePortal<T>(componentOrTemplateRef, null!, {
          sheetRef: sheetRef,
        } as any),
      );
    } else if (typeof componentOrTemplateRef !== 'string') {
      const injector = this.createInjector<T, U>(sheetRef, config);
      const contentRef = sheetContainer.attachComponentPortal<T>(new ComponentPortal(componentOrTemplateRef, config.zViewContainerRef, injector));
      sheetRef.componentInstance = contentRef.instance;
    }

    return sheetRef;
  }

  private createInjector<T, U>(sheetRef: B3SheetRef<T>, config: B3SheetOptions<T, U>) {
    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: B3SheetRef, useValue: sheetRef },
        { provide: Z_MODAL_DATA, useValue: config.zData },
      ],
    });
  }
}
