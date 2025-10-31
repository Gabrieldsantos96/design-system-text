import type { Block } from '@b3/domain/components/block-container/block-container.component';

import { Authentication01Component } from './authentication-01.component';

export const authentication01Block: Block = {
  id: 'authentication-01',
  title: 'Authentication page',
  description: 'A modern authentication page with email/password.',
  component: Authentication01Component,
  category: 'Authentication',
  image: {
    light: '/blocks/authentication-01/light.png',
    dark: '/blocks/authentication-01/dark.png',
  },
  files: [
    {
      name: 'authentication-01.component.ts',
      path: 'src/components/authentication-01/authentication-01.component.ts',
      content: `import { B3FormFieldComponent, B3FormLabelComponent, B3FormControlComponent } from '@b3/components/form/form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { B3CheckboxComponent } from '@b3/components/checkbox/checkbox.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3InputDirective } from '@b3/components/input/input.directive';
import { B3CardComponent } from '@b3/components/card/card.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'b3-authentication-01',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    B3ButtonComponent,
    B3CardComponent,
    B3CheckboxComponent,
    B3InputDirective,
    B3FormFieldComponent,
    B3FormLabelComponent,
    B3FormControlComponent,
  ],
  templateUrl: './authentication-01.component.html',
})
export class Authentication01Component {
  protected readonly isLoading = signal(false);

  protected readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false),
  });
}
`,
      language: 'typescript',
    },
    {
      name: 'authentication-01.component.html',
      path: 'src/components/authentication-01/authentication-01.component.html',
      content: `<div class="flex min-h-screen flex-col lg:flex-row">
  <div class="flex flex-1 items-center justify-center bg-background p-4 sm:p-8">
    <div class="w-full max-w-md space-y-6 sm:space-y-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Welcome back</h1>
        <p class="mt-2 text-sm text-muted-foreground sm:text-base">Sign in to your account to continue</p>
      </div>

      <b3-card class="p-4 sm:p-6 lg:p-8">
        <form [formGroup]="loginForm" class="space-y-4 sm:space-y-6">
          <b3-form-field>
            <b3-form-label [zRequired]="true">Email</b3form-label>
            <b3-form-control>
              <input b3-input type="email" formControlName="email" placeholder="name@b3.com" class="w-full" />
            </b3-form-control>
          </b3-form-field>

          <b3-form-field>
            <div class="flex items-center justify-between">
              <b3-form-label [zRequired]="true">Password</b3-form-label>
              <a b3-button zType="link" class="p-0">Forgot password?</a>
            </div>
            <b3-form-control>
              <input b3-input type="password" formControlName="password" placeholder="••••••••" class="w-full" />
            </b3-form-control>
          </b3-form-field>

          <div class="flex items-center gap-2">
            <b3-checkbox id="remember" formControlName="rememberMe"></b3-checkbox>
            <label for="remember" class="text-sm cursor-pointer select-none">Remember me for 30 days</label>
          </div>

          <button type="submit" b3-button zFull [zLoading]="isLoading()" [disabled]="isLoading()">Sign in</button>
        </form>
      </b3-card>

      <p class="text-center text-sm text-muted-foreground">
        Don't have an account?
        <a b3-button zType="link" href="#" class="px-0">Sign up</a>
      </p>
    </div>
  </div>
  <aside class="hidden flex-1 items-center justify-center bg-muted p-8 lg:flex"></aside>
</div>
`,
      language: 'html',
    },
  ],
};
