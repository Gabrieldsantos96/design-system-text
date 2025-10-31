import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { B3CheckboxComponent } from '@b3/components/checkbox/checkbox.component';
import { B3FormFieldComponent, B3FormLabelComponent, B3FormControlComponent } from '@b3/components/form/form.component';
import { B3InputDirective } from '@b3/components/input/input.directive';

@Component({
  selector: 'b3-authentication-01',
  standalone: true,
  imports: [ReactiveFormsModule, B3ButtonComponent, B3CardComponent, B3CheckboxComponent, B3InputDirective, B3FormFieldComponent, B3FormLabelComponent, B3FormControlComponent],
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
