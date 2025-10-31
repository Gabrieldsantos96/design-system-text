import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { B3ButtonComponent } from '../../button/button.component';
import { B3InputDirective } from '../../input/input.directive';
import { B3FormModule } from '../form.module';

@Component({
  selector: 'b3-demo-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, B3ButtonComponent, B3InputDirective, B3FormModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <form [formGroup]="validationForm" (ngSubmit)="onSubmit()" class="space-y-6 max-w-sm">
      <b3-form-field>
        <label b3-form-label zRequired>Name</label>
        <b3-form-control>
          <input b3-input type="text" placeholder="Your full name" formControlName="name" [zStatus]="nameControl.invalid && nameControl.touched ? 'error' : undefined" />
        </b3-form-control>
        @if (nameControl.hasError('required') && nameControl.touched) {
          <b3-form-message zType="error">Name is required.</b3-form-message>
        } @else if (nameControl.hasError('minlength') && nameControl.touched) {
          <b3-form-message zType="error">Name must be at least 2 characters long.</b3-form-message>
        } @else {
          <b3-form-message>Enter your full name.</b3-form-message>
        }
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label zRequired>Email</label>
        <b3-form-control>
          <input
            b3-input
            type="email"
            placeholder="your.email@example.com"
            formControlName="email"
            [zStatus]="emailControl.invalid && emailControl.touched ? 'error' : undefined"
          />
        </b3-form-control>
        @if (emailControl.hasError('required') && emailControl.touched) {
          <b3-form-message zType="error">Email is required.</b3-form-message>
        } @else if (emailControl.hasError('email') && emailControl.touched) {
          <b3-form-message zType="error">Please enter a valid email address.</b3-form-message>
        } @else {
          <b3-form-message>We'll never share your email.</b3-form-message>
        }
      </b3-form-field>

      <b3-form-field>
        <label b3-form-label>Website</label>
        <b3-form-control>
          <input
            b3-input
            type="url"
            placeholder="https://example.com"
            formControlName="website"
            [zStatus]="websiteControl.invalid && websiteControl.touched ? 'error' : websiteControl.valid && websiteControl.touched ? 'success' : undefined"
          />
        </b3-form-control>
        @if (websiteControl.hasError('pattern') && websiteControl.touched) {
          <b3-form-message zType="error">Please enter a valid URL starting with http:// or https://</b3-form-message>
        } @else if (websiteControl.valid && websiteControl.touched && websiteControl.value) {
          <b3-form-message zType="success">Valid website URL!</b3-form-message>
        } @else {
          <b3-form-message>Optional: Your website or portfolio URL.</b3-form-message>
        }
      </b3-form-field>

      <div class="flex gap-2">
        <button b3-button zType="default" type="submit" [disabled]="validationForm.invalid">Submit</button>
        <button b3-button zType="outline" type="button" (click)="reset()">Reset</button>
      </div>

      @if (submitted) {
        <b3-form-message zType="success" class="block">Form submitted successfully! ✓</b3-form-message>
      }
    </form>
  `,
})
export class B3DemoFormValidationComponent {
  submitted = false;

  validationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.pattern(/^https?:\/\/.+/)]),
  });

  get nameControl() {
    return this.validationForm.get('name')!;
  }

  get emailControl() {
    return this.validationForm.get('email')!;
  }

  get websiteControl() {
    return this.validationForm.get('website')!;
  }

  onSubmit() {
    if (this.validationForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.validationForm.value);

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }

  reset() {
    this.validationForm.reset();
    this.submitted = false;
  }
}
