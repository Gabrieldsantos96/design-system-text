```angular-ts showLineNumbers copyButton
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { B3ButtonComponent } from '../../button/button.component';
import { B3InputDirective } from '../../input/input.directive';
import { B3DialogModule } from '../dialog.component';
import { Z_MODAL_DATA, B3DialogService } from '../dialog.service';

interface iDialogData {
  name: string;
  username: string;
}

@Component({
  selector: 'b3-demo-dialog-basic',
  exportAs: 'zardDemoDialogBasic',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, B3InputDirective],
  template: `
    <form [formGroup]="form" class="grid gap-4">
      <div class="grid gap-3">
        <label
          for="name"
          class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >Name</label
        >
        <input b3-input formControlName="name" />
      </div>

      <div class="grid gap-3">
        <label
          for="username"
          class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >Username</label
        >
        <input b3-input formControlName="username" />
      </div>
    </form>
  `,
})
export class B3DemoDialogBasicInputComponent {
  private zData: iDialogData = inject(Z_MODAL_DATA);

  form = new FormGroup({
    name: new FormControl('Pedro Duarte'),
    username: new FormControl('@peduarte'),
  });

  constructor() {
    if (this.zData) this.form.patchValue(this.zData);
  }
}

@Component({
  standalone: true,
  imports: [B3ButtonComponent, B3DialogModule],
  template: ` <button b3-button zType="outline" (click)="openDialog()">Edit profile</button> `,
})
export class B3DemoDialogBasicComponent {
  private dialogService = inject(B3DialogService);

  openDialog() {
    this.dialogService.create({
      zTitle: 'Edit Profile',
      zDescription: `Make changes to your profile here. Click save when you're done.`,
      zContent: B3DemoDialogBasicInputComponent,
      zData: {
        name: 'Samuel Rizzon',
        username: '@samuelrizzondev',
      } as iDialogData,
      zOkText: 'Save changes',
      zOnOk: instance => {
        console.log('Form submitted:', instance.form.value);
      },
      zWidth: '425px',
    });
  }
}

```