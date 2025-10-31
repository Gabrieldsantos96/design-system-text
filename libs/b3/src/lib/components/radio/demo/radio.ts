import { B3DemoRadioDefaultComponent } from './default';
import { B3DemoRadioDisabledComponent } from './disabled';

export const RADIO = {
  componentName: 'radio',
  componentType: 'radio',
  description: 'A control that allows the user to select one option from a set of options.',
  examples: [
    {
      name: 'default',
      component: B3DemoRadioDefaultComponent,
    },
    {
      name: 'disabled',
      component: B3DemoRadioDisabledComponent,
    },
  ],
};
