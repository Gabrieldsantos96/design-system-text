import { NgModule } from '@angular/core';

import {
  B3PaginationButtonComponent,
  B3PaginationComponent,
  B3PaginationContentComponent,
  B3PaginationEllipsisComponent,
  B3PaginationItemComponent,
  B3PaginationNextComponent,
  B3PaginationPreviousComponent,
} from './pagination.component';

const components = [
  B3PaginationContentComponent,
  B3PaginationItemComponent,
  B3PaginationButtonComponent,
  B3PaginationPreviousComponent,
  B3PaginationNextComponent,
  B3PaginationEllipsisComponent,
  B3PaginationComponent,
];

@NgModule({
  imports: components,
  exports: components,
})
export class B3PaginationModule {}
