import { NgModule } from '@angular/core';

import {
  B3TableComponent,
  B3TableHeaderComponent,
  B3TableBodyComponent,
  B3TableRowComponent,
  B3TableHeadComponent,
  B3TableCellComponent,
  B3TableCaptionComponent,
} from './table.component';

const TABLE_COMPONENTS = [B3TableComponent, B3TableHeaderComponent, B3TableBodyComponent, B3TableRowComponent, B3TableHeadComponent, B3TableCellComponent, B3TableCaptionComponent];

@NgModule({
  imports: [...TABLE_COMPONENTS],
  exports: [...TABLE_COMPONENTS],
})
export class B3TableModule {}
