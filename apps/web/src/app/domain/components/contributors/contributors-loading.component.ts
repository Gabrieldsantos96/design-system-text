import { Component } from '@angular/core';

@Component({
  selector: 'b3-contributors-loading',
  standalone: true,
  template: `
    <div class="flex flex-wrap gap-4">
      @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track $index) {
        <div class="animate-pulse">
          <div class="h-12 w-12 rounded-full bg-muted"></div>
        </div>
      }
    </div>
  `,
})
export class ContributorsLoadingComponent {}
