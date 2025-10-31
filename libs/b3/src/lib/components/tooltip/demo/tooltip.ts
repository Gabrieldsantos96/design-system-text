import { B3DemoTooltipClickComponent } from './click';
import { B3DemoTooltipEventsComponent } from './events';
import { B3DemoTooltipHoverComponent } from './hover';
import { B3DemoTooltipPositionComponent } from './position';

export const TOOLTIP = {
  componentName: 'tooltip',
  componentType: 'tooltip',
  description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  examples: [
    {
      name: 'hover',
      component: B3DemoTooltipHoverComponent,
    },
    {
      name: 'click',
      component: B3DemoTooltipClickComponent,
    },
    {
      name: 'position',
      component: B3DemoTooltipPositionComponent,
    },
    {
      name: 'events',
      component: B3DemoTooltipEventsComponent,
    },
  ],
};
