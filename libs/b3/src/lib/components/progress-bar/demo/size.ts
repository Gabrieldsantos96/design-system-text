import { Component } from '@angular/core';

import { B3ProgressBarComponent } from '../progress-bar.component';

@Component({
  selector: 'b3-demo-progress-bar-size',
  standalone: true,
  imports: [B3ProgressBarComponent],
  template: `
    <b3-progress-bar [progress]="50" [zSize]="'default'"></b3-progress-bar>
    <b3-progress-bar [progress]="50" [zSize]="'sm'"></b3-progress-bar>
    <b3-progress-bar [progress]="50" [zSize]="'lg'"></b3-progress-bar>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `,
  ],
})
export class B3DemoProgressBarSizeComponent {}
