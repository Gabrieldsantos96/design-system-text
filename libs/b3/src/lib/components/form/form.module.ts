import { NgModule } from '@angular/core';

import { B3FormControlComponent, B3FormFieldComponent, B3FormLabelComponent, B3FormMessageComponent } from './form.component';

const FORM_COMPONENTS = [B3FormFieldComponent, B3FormLabelComponent, B3FormControlComponent, B3FormMessageComponent];

@NgModule({
  imports: [...FORM_COMPONENTS],
  exports: [...FORM_COMPONENTS],
})
export class B3FormModule {}
