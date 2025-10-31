import { Component, input } from '@angular/core';

import { Step } from '@b3/shared/constants/install.constant';

import { StepComponent } from '../step/step.component';

@Component({
  selector: 'b3-steps',
  template: `
    @if (steps()) {
      <section>
        @for (step of steps(); track step.title; let index = $index) {
          <b3-step [position]="index + 1" [stepProps]="step"></b3-step>
        }
      </section>
    }
  `,
  standalone: true,
  imports: [StepComponent],
})
export class StepsComponent {
  readonly steps = input<Step[]>();
}
