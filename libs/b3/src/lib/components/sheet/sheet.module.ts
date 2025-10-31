import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { B3SheetComponent } from './sheet.component';
import { B3SheetService } from './sheet.service';
import { B3ButtonComponent } from '../button/button.component';

const components = [CommonModule, B3ButtonComponent, B3SheetComponent, OverlayModule, PortalModule];

@NgModule({
  imports: components,
  exports: components,
})
export class B3BreadcrumbModule {}

@NgModule({
  imports: [CommonModule, B3ButtonComponent, B3SheetComponent, OverlayModule, PortalModule],
  providers: [B3SheetService],
})
export class B3SheetModule {}
