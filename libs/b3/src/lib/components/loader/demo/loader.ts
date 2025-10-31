import { B3DemoLoaderDefaultComponent } from './default';
import { B3DemoLoaderSizeComponent } from './size';

export const LOADER = {
  componentName: 'loader',
  componentType: 'loader',
  description: 'The Loader is a visual component that displays a loading animation to indicate that an action or process is in progress.',
  examples: [
    {
      name: 'default',
      component: B3DemoLoaderDefaultComponent,
    },
    {
      name: 'size',
      component: B3DemoLoaderSizeComponent,
    },
  ],
};
