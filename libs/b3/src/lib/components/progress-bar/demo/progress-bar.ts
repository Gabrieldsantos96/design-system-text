import { B3DemoProgressBarBasicComponent } from './basic';
import { B3DemoProgressBarIndeterminateComponent } from './indeterminate';
import { B3DemoProgressBarShapeComponent } from './shape';
import { B3DemoProgressBarSizeComponent } from './size';

export const PROGRESS_BAR = {
  componentName: 'progress-bar',
  componentType: 'progress-bar',
  description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  fullWidth: true,
  examples: [
    {
      name: 'basic',
      component: B3DemoProgressBarBasicComponent,
    },
    {
      name: 'indeterminate',
      component: B3DemoProgressBarIndeterminateComponent,
    },
    {
      name: 'shape',
      component: B3DemoProgressBarShapeComponent,
    },
    {
      name: 'size',
      component: B3DemoProgressBarSizeComponent,
    },
  ],
};
