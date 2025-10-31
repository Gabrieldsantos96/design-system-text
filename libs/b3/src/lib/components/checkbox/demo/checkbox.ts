import { B3DemoCheckboxDefaultComponent } from './default';
import { B3DemoCheckboxDestructiveComponent } from './destructive';
import { B3DemoCheckboxDisabledComponent } from './disabled';
import { B3DemoCheckboxShapeComponent } from './shape';
import { B3DemoCheckboxSizeComponent } from './size';

export const CHECKBOX = {
  componentName: 'checkbox',
  componentType: 'checkbox',
  description: 'A control that allows the user to toggle between checked and not checked.',
  examples: [
    {
      name: 'default',
      component: B3DemoCheckboxDefaultComponent,
    },
    {
      name: 'destructive',
      component: B3DemoCheckboxDestructiveComponent,
    },
    {
      name: 'size',
      component: B3DemoCheckboxSizeComponent,
    },
    {
      name: 'shape',
      component: B3DemoCheckboxShapeComponent,
    },
    {
      name: 'disabled',
      component: B3DemoCheckboxDisabledComponent,
    },
  ],
};
