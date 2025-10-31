import { B3DemoInputGroupBorderlessComponent } from './borderless';
import { B3DemoInputGroupDefaultComponent } from './default';
import { B3DemoInputGroupSizeComponent } from './size';

export const INPUT_GROUP = {
  componentName: 'input-group',
  componentType: 'input-group',
  description: 'Display additional information or actions to an input or textarea.',
  examples: [
    {
      name: 'default',
      component: B3DemoInputGroupDefaultComponent,
      column: true,
    },
    {
      name: 'size',
      component: B3DemoInputGroupSizeComponent,
      column: true,
    },
    {
      name: 'borderless',
      component: B3DemoInputGroupBorderlessComponent,
      column: true,
    },
  ],
};
