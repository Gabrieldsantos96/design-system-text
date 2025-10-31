import { Component, input } from '@angular/core';

@Component({
  selector: 'b3-banner',
  standalone: true,
  template: `
    <aside [class]="'w-full text-center py-2 ' + (isDevMode() ? 'bg-primary' : 'bg-primary')">
      <h1 [class]="isDevMode() ? 'text-primary-foreground' : 'text-primary-foreground'">
        <ng-content></ng-content>
      </h1>
    </aside>
  `,
})
export class BannerComponent {
  readonly isDevMode = input(false);
}
