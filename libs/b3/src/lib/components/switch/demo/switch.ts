import { B3DemoSwitchDefaultComponent } from './default';
import { B3DemoSwitchDestructiveComponent } from './destructive';
import { B3DemoSwitchDisabledComponent } from './disabled';
import { B3DemoSwitchSizeComponent } from './size';

export const SWITCH = {
  componentName: 'switch',
  componentType: 'switch',
  description: 'A control that allows the user to toggle between checked and unchecked.',
  examples: [
    {
      name: 'default',
      component: B3DemoSwitchDefaultComponent,
    },
    {
      name: 'destructive',
      component: B3DemoSwitchDestructiveComponent,
    },
    {
      name: 'size',
      component: B3DemoSwitchSizeComponent,
    },
    {
      name: 'disabled',
      component: B3DemoSwitchDisabledComponent,
    },
  ],
};
