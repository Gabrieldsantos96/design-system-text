```angular-ts showLineNumbers copyButton
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { B3ButtonComponent } from '../../button/button.component';
import { B3InputDirective } from '../../input/input.directive';
import { B3FormModule } from '../form.module';

@Component({
  selector: 'zard-demo-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, B3ButtonComponent, B3InputDirective, B3FormModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="space-y-6 max-w-sm">
      <b3-form-field>
        <label b3-form-label zRequired>Username</label>
        <b3-form-control>
          <input b3-input type="text" placeholder="Choose a username" formControlName="username" />
        </b3-form-control>
        <b3-form-message zType="default">Username must be 3-20 characters long.</b3-form-message>
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label zRequired>Email</label>
        <b3-form-control>
          <input b3-input type="email" placeholder="Enter your email" formControlName="email" />
        </b3-form-control>
        <b3-form-message zType="default">We'll use this for account notifications.</b3-form-message>
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label zRequired>Password</label>
        <b3-form-control>
          <input b3-input type="password" placeholder="Create a password" formControlName="password" />
        </b3-form-control>
        <b3-form-message zType="default">Password must be at least 6 characters.</b3-form-message>
      </b3-form-field>

      <button b3-button zType="default" type="submit" [disabled]="profileForm.invalid">Create Account</button>
    </form>
  `,
})
export class B3DemoFormReactiveComponent {
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
    }
  }
}

```