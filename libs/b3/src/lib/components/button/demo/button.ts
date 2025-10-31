import { B3DemoButtonDefaultComponent } from './default';
import { B3DemoButtonFullComponent } from './full';
import { B3DemoButtonLoadingComponent } from './loading';
import { B3DemoButtonShapeComponent } from './shape';
import { B3DemoButtonSizeComponent } from './size';
import { B3DemoButtonTypeComponent } from './type';

export const BUTTON = {
  componentName: 'button',
  componentType: 'button',
  description: 'Displays a button or a component that looks like a button.',
  examples: [
    {
      name: 'default',
      component: B3DemoButtonDefaultComponent,
    },
    {
      name: 'type',
      component: B3DemoButtonTypeComponent,
    },
    {
      name: 'size',
      component: B3DemoButtonSizeComponent,
    },
    {
      name: 'shape',
      component: B3DemoButtonShapeComponent,
    },
    {
      name: 'full',
      component: B3DemoButtonFullComponent,
    },
    {
      name: 'loading',
      component: B3DemoButtonLoadingComponent,
    },
  ],
};
