import { B3DemoResizableDefaultComponent } from './default';
import { B3DemoResizableVerticalComponent } from './vertical';
import { B3DemoResizableWithMinMaxComponent } from './with-min-max';

export const RESIZABLE = {
  componentName: 'resizable',
  componentType: 'resizable',
  description: 'A resizable layout component that allows users to resize panels by dragging dividers between them.',
  fullWidth: true,
  examples: [
    {
      name: 'default',
      component: B3DemoResizableDefaultComponent,
    },
    {
      name: 'vertical',
      component: B3DemoResizableVerticalComponent,
    },
    {
      name: 'with-min-max',
      component: B3DemoResizableWithMinMaxComponent,
    },
  ],
};
