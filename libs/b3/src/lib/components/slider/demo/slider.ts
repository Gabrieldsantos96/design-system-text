import { B3DemoSliderDefaultComponent } from './default';
import { B3DemoSliderDisabledComponent } from './disabled';
import { B3DemoSliderMinMaxComponent } from './min-max';
import { B3DemoSliderVerticalComponent } from './vertical';

export const SLIDER = {
  componentName: 'slider',
  componentType: 'slider',
  description: 'An input where the user selects a value from within a given range.',
  fullWidth: true,
  examples: [
    {
      name: 'default',
      component: B3DemoSliderDefaultComponent,
    },
    {
      name: 'disabled',
      component: B3DemoSliderDisabledComponent,
    },
    {
      name: 'min-max',
      component: B3DemoSliderMinMaxComponent,
    },
    {
      name: 'vertical',
      component: B3DemoSliderVerticalComponent,
    },
  ],
};
