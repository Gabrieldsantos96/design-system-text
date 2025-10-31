import { B3DemoSegmentedDefaultComponent } from './default';
import { B3DemoSegmentedDisabledComponent } from './disabled';
import { B3DemoSegmentedSizesComponent } from './sizes';

export const SEGMENTED = {
  componentName: 'segmented',
  componentType: 'segmented',
  description:
    'A set of two or more segments, each of which functions as a mutually exclusive button. Based on shadcn/ui Tabs component pattern, providing a clean way to create toggle controls with single selection.',
  examples: [
    {
      name: 'default',
      component: B3DemoSegmentedDefaultComponent,
    },
    {
      name: 'sizes',
      component: B3DemoSegmentedSizesComponent,
    },
    {
      name: 'disabled',
      component: B3DemoSegmentedDisabledComponent,
    },
  ],
};
