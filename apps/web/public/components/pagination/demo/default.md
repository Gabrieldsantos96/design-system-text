```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3PaginationModule } from '../pagination.module';

@Component({
  selector: 'b3-demo-pagination-default',
  standalone: true,
  imports: [B3PaginationModule, FormsModule],
  template: ` <b3-pagination [zPageIndex]="currentPage" [zTotal]="5" [(ngModel)]="currentPage" /> `,
})
export class B3DemoPaginationDefaultComponent {
  protected currentPage = 2;
}

```