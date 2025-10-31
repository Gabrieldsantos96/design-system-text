import { B3DemoSkeletonCardComponent } from './card';
import { B3DemoSkeletonDefaultComponent } from './default';

export const SKELETON = {
  componentName: 'skeleton',
  componentType: 'skeleton',
  description: 'Use to show a placeholder while content is loading.',
  fullWidth: true,
  examples: [
    {
      name: 'default',
      component: B3DemoSkeletonDefaultComponent,
    },
    {
      name: 'card',
      component: B3DemoSkeletonCardComponent,
    },
  ],
};
