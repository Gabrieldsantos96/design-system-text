import { B3DemoPaginationCustomComponent } from './custom';
import { B3DemoPaginationDefaultComponent } from './default';

export const PAGINATION = {
  componentName: 'pagination',
  componentType: 'pagination',
  description: 'Pagination with page navigation, next and previous links.',
  examples: [
    {
      name: 'default',
      component: B3DemoPaginationDefaultComponent,
    },
    {
      name: 'custom',
      component: B3DemoPaginationCustomComponent,
    },
  ],
};
