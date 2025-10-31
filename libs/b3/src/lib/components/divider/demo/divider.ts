import { B3DemoDividerDefaultComponent } from './default';
import { B3DemoDividerVerticalComponent } from './vertical';

export const DIVIDER = {
  componentName: 'divider',
  componentType: 'divider',
  description: 'The Divider component is used to visually separate content with a horizontal or vertical line.',
  examples: [
    {
      name: 'default',
      component: B3DemoDividerDefaultComponent,
    },
    {
      name: 'vertical',
      component: B3DemoDividerVerticalComponent,
    },
  ],
};
