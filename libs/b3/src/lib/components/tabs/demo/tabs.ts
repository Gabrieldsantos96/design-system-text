import { B3DemoTabsAlignComponent } from './align';
import { B3DemoTabsArrowComponent } from './arrow';
import { B3DemoTabsDefaultComponent } from './default';
import { B3DemoTabsPositionComponent } from './position';

export const TABS = {
  componentName: 'tabs',
  componentType: 'tabs',
  description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  examples: [
    {
      name: 'default',
      component: B3DemoTabsDefaultComponent,
    },
    {
      name: 'position',
      component: B3DemoTabsPositionComponent,
    },
    {
      name: 'align',
      component: B3DemoTabsAlignComponent,
    },
    {
      name: 'arrow',
      component: B3DemoTabsArrowComponent,
    },
  ],
};
