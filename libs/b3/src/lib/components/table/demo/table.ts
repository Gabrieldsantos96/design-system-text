import { B3DemoTablePaymentsComponent } from './payments';
import { B3DemoTableSimpleComponent } from './simple';

export const TABLE = {
  componentName: 'table',
  componentType: 'table',
  description: 'Displays data in a structured table format with styling variants and semantic HTML structure.',
  examples: [
    {
      name: 'simple',
      component: B3DemoTableSimpleComponent,
    },
    {
      name: 'payments',
      component: B3DemoTablePaymentsComponent,
    },
  ],
};
