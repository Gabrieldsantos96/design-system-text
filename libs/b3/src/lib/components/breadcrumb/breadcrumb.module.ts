import { NgModule } from '@angular/core';

import { B3BreadcrumbComponent, B3BreadcrumbEllipsisComponent, B3BreadcrumbItemComponent } from './breadcrumb.component';

const components = [B3BreadcrumbComponent, B3BreadcrumbItemComponent, B3BreadcrumbEllipsisComponent];

@NgModule({
  imports: components,
  exports: components,
})
export class B3BreadcrumbModule {}
