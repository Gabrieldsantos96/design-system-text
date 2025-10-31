import { A11yModule } from '@angular/cdk/a11y';
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
  ViewEncapsulation,
} from '@angular/core';

import type { ClassValue } from 'clsx';

import type { B3AlertDialogRef } from './alert-dialog-ref';
import { B3AlertDialogService } from './alert-dialog.service';
import { alertDialogVariants } from './alert-dialog.variants';
import { generateId, mergeClasses, noopFun } from '../../shared/utils/utils';
import { B3ButtonComponent } from '../button/button.component';

export type OnClickCallback<T> = (instance: T) => false | void | object;

export class B3AlertDialogOptions<T> {
  zCancelText?: string | null;
  zClosable?: boolean;
  zContent?: string | TemplateRef<T> | Type<T>;
  zCustomClasses?: ClassValue;
  zData?: object;
  zDescription?: string;
  zMaskClosable?: boolean;
  zOkDestructive?: boolean;
  zOkDisabled?: boolean;
  zOkText?: string | null;
  zOnCancel?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zOnOk?: EventEmitter<T> | OnClickCallback<T> = noopFun;
  zTitle?: string | TemplateRef<T>;
  zViewContainerRef?: ViewContainerRef;
  zWidth?: string;
}

@Component({
  selector: 'b3-alert-dialog',
  exportAs: 'zAlertDialog',
  standalone: true,
  imports: [OverlayModule, PortalModule, B3ButtonComponent, A11yModule],
  templateUrl: './alert-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes()',
    '[style.width]': 'config.zWidth ? config.zWidth : null',
    role: 'alertdialog',
    '[attr.aria-modal]': 'true',
    '[attr.aria-labelledby]': 'titleId()',
    '[attr.aria-describedby]': 'descriptionId()',
    'animate.enter': 'alert-dialog-enter',
    'animate.leave': 'alert-dialog-leave',
  },
  styles: [
    `
      b3-alert-dialog {
        inset: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
        transform-origin: center center;
        opacity: 1;
        transform: scale(1);
        transition:
          opacity 150ms ease-out,
          transform 150ms ease-out;
      }

      @starting-style {
        b3-alert-dialog {
          opacity: 0;
          transform: scale(0.9);
        }
      }

      b3-alert-dialog.alert-dialog-leave {
        opacity: 0;
        transform: scale(0.9);
        transition:
          opacity 150ms ease-in,
          transform 150ms ease-in;
      }
    `,
  ],
})
export class B3AlertDialogComponent<T> extends BasePortalOutlet {
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly config = inject(B3AlertDialogOptions<T>);

  protected readonly classes = computed(() => mergeClasses(alertDialogVariants(), this.config.zCustomClasses));

  private readonly alertDialogId = generateId('alert-dialog');
  protected readonly titleId = computed(() => (this.config.zTitle ? `${this.alertDialogId}-title` : null));
  protected readonly descriptionId = computed(() => (this.config.zDescription ? `${this.alertDialogId}-description` : null));

  public alertDialogRef?: B3AlertDialogRef<T>;

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
      throw new Error('Attempting to attach alert dialog content after content is already attached');
    }
    return this.portalOutlet()?.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this.portalOutlet()?.hasAttached()) {
      throw new Error('Attempting to attach alert dialog content after content is already attached');
    }

    return this.portalOutlet()?.attachTemplatePortal(portal);
  }

  onOkClick() {
    this.okTriggered.emit();
  }

  onCancelClick() {
    this.cancelTriggered.emit();
  }
}

@NgModule({
  imports: [B3ButtonComponent, B3AlertDialogComponent, OverlayModule, PortalModule, A11yModule],
  providers: [B3AlertDialogService],
})
export class B3AlertDialogModule {}
