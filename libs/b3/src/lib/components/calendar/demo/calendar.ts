import { B3DemoCalendarDefaultComponent } from './default';
import { B3DemoCalendarMultipleComponent } from './multiple';
import { B3DemoCalendarRangeComponent } from './range';
import { B3DemoCalendarWithConstraintsComponent } from './with-constraints';

export const CALENDAR = {
  componentName: 'calendar',
  componentType: 'calendar',
  description: 'A flexible and accessible calendar component for selecting dates. Built with modern Angular patterns and full keyboard navigation support.',
  fullWidth: true,
  examples: [
    {
      name: 'default',
      component: B3DemoCalendarDefaultComponent,
    },
    {
      name: 'multiple',
      component: B3DemoCalendarMultipleComponent,
    },
    {
      name: 'range',
      component: B3DemoCalendarRangeComponent,
    },
    {
      name: 'with-constraints',
      component: B3DemoCalendarWithConstraintsComponent,
    },
  ],
};
