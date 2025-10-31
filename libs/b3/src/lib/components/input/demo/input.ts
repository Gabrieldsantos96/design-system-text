import { B3DemoInputBorderlessComponent } from './borderless';
import { B3DemoInputDefaultComponent } from './default';
import { B3DemoInputSizeComponent } from './size';
import { B3DemoInputStatusComponent } from './status';
import { B3DemoInputTextAreaComponent } from './text-area';

export const INPUT = {
  componentName: 'input',
  componentType: 'input',
  description: 'Displays a form input field or a component that looks like an input field.',
  examples: [
    {
      name: 'default',
      component: B3DemoInputDefaultComponent,
      column: true,
    },
    {
      name: 'size',
      component: B3DemoInputSizeComponent,
      column: true,
    },
    {
      name: 'status',
      component: B3DemoInputStatusComponent,
      column: true,
    },
    {
      name: 'borderless',
      component: B3DemoInputBorderlessComponent,
    },
    {
      name: 'text-area',
      component: B3DemoInputTextAreaComponent,
      column: true,
    },
  ],
};
