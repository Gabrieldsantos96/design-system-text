import { B3DemoComboboxDefaultComponent } from './default';
import { B3DemoComboboxDisabledComponent } from './disabled';
import { B3DemoComboboxFormComponent } from './form';
import { B3DemoComboboxGroupedComponent } from './grouped';

export const COMBOBOX = {
  componentName: 'combobox',
  componentType: 'combobox',
  description: 'Autocomplete input and command palette with a list of suggestions.',
  examples: [
    {
      name: 'default',
      component: B3DemoComboboxDefaultComponent,
    },
    {
      name: 'grouped',
      component: B3DemoComboboxGroupedComponent,
    },
    {
      name: 'disabled',
      component: B3DemoComboboxDisabledComponent,
    },
    {
      name: 'form',
      component: B3DemoComboboxFormComponent,
    },
  ],
};
