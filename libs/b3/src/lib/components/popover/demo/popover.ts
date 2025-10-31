import { B3DemoPopoverDefaultComponent } from './default';
import { B3DemoPopoverHoverComponent } from './hover';
import { B3DemoPopoverInteractiveComponent } from './interactive';
import { B3DemoPopoverPlacementComponent } from './placement';

export const POPOVER = {
  componentName: 'popover',
  componentType: 'popover',
  description: 'Displays rich content in a portal, triggered by a button.',
  examples: [
    {
      name: 'default',
      component: B3DemoPopoverDefaultComponent,
    },
    {
      name: 'hover',
      component: B3DemoPopoverHoverComponent,
    },
    {
      name: 'placement',
      component: B3DemoPopoverPlacementComponent,
    },
    {
      name: 'interactive',
      component: B3DemoPopoverInteractiveComponent,
    },
  ],
};
