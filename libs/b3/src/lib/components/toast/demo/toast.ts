import { B3DemoToastAdvancedComponent } from './advanced';
import { B3DemoToastDefaultComponent } from './default';
import { B3DemoToastDestructiveComponent } from './destructive';
import { B3DemoToastLoadingComponent } from './loading';
import { B3DemoToastPositionComponent } from './position';
import { B3DemoToastSuccessComponent } from './success';

export const TOAST = {
  componentName: 'toast',
  componentType: 'toast',
  description: 'A succinct message that is displayed temporarily.',
  examples: [
    {
      name: 'default',
      component: B3DemoToastDefaultComponent,
    },
    {
      name: 'destructive',
      component: B3DemoToastDestructiveComponent,
    },
    {
      name: 'success',
      component: B3DemoToastSuccessComponent,
    },
    {
      name: 'loading',
      component: B3DemoToastLoadingComponent,
    },
    {
      name: 'advanced',
      component: B3DemoToastAdvancedComponent,
    },
    {
      name: 'position',
      component: B3DemoToastPositionComponent,
    },
  ],
};
