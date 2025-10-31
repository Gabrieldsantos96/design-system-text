# Usage in Header Component

## (or any component you want to use to trigger the theme)

The header uses the service to implement the theme toggle button, allowing users to switch between light and dark mode.

```typescript
// header.component.ts
import { Component, inject } from '@angular/core';
import { DarkModeService } from '@b3/shared/services/darkmode.service';

@Component({
  selector: 'b3-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule, B3ButtonComponent /* other imports */],
})
export class HeaderComponent {
  private readonly darkmodeService = inject(DarkModeService);

  toggleTheme(): void {
    this.darkmodeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.darkmodeService.getCurrentTheme();
  }
}
```

## Button Template

```html
<!-- header.component.html -->
<b3-button (click)="toggleTheme()" variant="ghost" size="icon" [attr.aria-label]="getCurrentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
  @if (getCurrentTheme() === 'dark') {
  <svg><!-- sun icon --></svg>
  } @else {
  <svg><!-- moon icon --></svg>
  }
</b3-button>
```
