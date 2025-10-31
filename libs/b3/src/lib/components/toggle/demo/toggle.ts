import { B3DemoToggleDefaultComponent } from './default';
import { B3DemoToggleDisabledComponent } from './disabled';
import { B3DemoToggleLargeComponent } from './large';
import { B3DemoToggleOutlineComponent } from './outline';
import { B3DemoToggleSmallComponent } from './small';
import { B3DemoToggleWithDefaultComponent } from './with-default';
import { B3DemoToggleWithFormsComponent } from './with-forms';
import { B3DemoToggleWithTextComponent } from './with-text';

export const TOGGLE = {
  componentName: 'toggle',
  componentType: 'toggle',
  description: 'A two-state button that can be either on or off.',
  examples: [
    {
      name: 'default',
      component: B3DemoToggleDefaultComponent,
    },
    {
      name: 'with-forms',
      component: B3DemoToggleWithFormsComponent,
    },
    {
      name: 'with-default',
      component: B3DemoToggleWithDefaultComponent,
    },
    {
      name: 'outline',
      component: B3DemoToggleOutlineComponent,
    },
    {
      name: 'with-text',
      component: B3DemoToggleWithTextComponent,
    },
    {
      name: 'small',
      component: B3DemoToggleSmallComponent,
    },
    {
      name: 'large',
      component: B3DemoToggleLargeComponent,
    },
    {
      name: 'disabled',
      component: B3DemoToggleDisabledComponent,
    },
  ],
};
