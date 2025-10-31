import { B3DemoDatePickerDefaultComponent } from './default';
import { B3DatePickerFormatsComponent } from './formats';
import { B3DemoDatePickerSizesComponent } from './sizes';

export const DATE_PICKER = {
  componentName: 'date-picker',
  componentType: 'date-picker',
  description: 'A date picker component with range and presets.',
  examples: [
    {
      name: 'default',
      component: B3DemoDatePickerDefaultComponent,
    },
    {
      name: 'sizes',
      component: B3DemoDatePickerSizesComponent,
    },
    {
      name: 'formats',
      component: B3DatePickerFormatsComponent,
    },
  ],
};
