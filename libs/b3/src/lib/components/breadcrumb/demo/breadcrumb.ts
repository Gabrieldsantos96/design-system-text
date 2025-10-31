import { B3DemoBreadcrumbDefaultComponent } from './default';
import { B3DemoBreadcrumbEllipsisComponent } from './ellipsis';
import { B3DemoBreadcrumbSeparatorComponent } from './separator';

export const BREADCRUMB = {
  componentName: 'breadcrumb',
  componentType: 'breadcrumb',
  description: 'Displays the path to the current resource using a hierarchy of links.',
  examples: [
    {
      name: 'default',
      component: B3DemoBreadcrumbDefaultComponent,
    },
    {
      name: 'separator',
      component: B3DemoBreadcrumbSeparatorComponent,
    },
    {
      name: 'ellipsis',
      component: B3DemoBreadcrumbEllipsisComponent,
    },
  ],
};
