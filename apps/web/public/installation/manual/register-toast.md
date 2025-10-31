```angular-ts title="app.component.ts'" copyButton showLineNumbers
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { B3ToastComponent } from '@shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, B3ToastComponent],
  template: `
    <router-outlet></router-outlet>
    <b3-toaster />
  `,
})
export class AppComponent {}
```
