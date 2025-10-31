```angular-ts showLineNumbers copyButton
import { Component, signal } from '@angular/core';

import { B3PaginationModule } from '../pagination.module';

@Component({
  selector: 'b3-demo-pagination-custom',
  standalone: true,
  imports: [B3PaginationModule],
  template: `
    <b3-pagination-content ariaLabel="Page navigation">
      <b3-pagination-item>
        <b3-pagination-previous (click)="goToPrevious()" />
      </b3-pagination-item>

      @for (page of pages(); track page) {
        <b3-pagination-item>
          <b3-pagination-button [zActive]="page === currentPage()" (click)="goToPage(page)">
            {{ page }}
          </b3-pagination-button>
        </b3-pagination-item>
      }

      <b3-pagination-item>
        <b3-pagination-next (click)="goToNext()" />
      </b3-pagination-item>
    </b3-pagination-content>
  `,
})
export class B3DemoPaginationCustomComponent {
  readonly totalPages = 5;
  currentPage = signal(3);

  pages = signal<number[]>(Array.from({ length: this.totalPages }, (_, i) => i + 1));

  goToPage(page: number) {
    this.currentPage.set(page);
  }

  goToPrevious() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  goToNext() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update(p => p + 1);
    }
  }
}

```