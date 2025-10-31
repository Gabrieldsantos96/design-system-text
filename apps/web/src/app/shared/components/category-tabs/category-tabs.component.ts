import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { B3ButtonComponent } from '@b3/components/button/button.component';

export interface CategoryTab {
  label: string;
  route: string;
}

@Component({
  selector: 'b3-category-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, B3ButtonComponent],
  templateUrl: './category-tabs.component.html',
})
export class CategoryTabsComponent {
  tabs = input.required<CategoryTab[]>();
  browseAllRoute = input<string>();
  browseAllLabel = input<string>('Browse all blocks');
}
