import { B3DemoAccordionBasicComponent } from './basic';
import { B3DemoAccordionMultipleComponent } from './multiple';

export const ACCORDION = {
  componentName: 'accordion',
  componentType: 'accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
  examples: [
    {
      name: 'basic',
      component: B3DemoAccordionBasicComponent,
      column: false,
    },
    {
      name: 'multiple',
      component: B3DemoAccordionMultipleComponent,
      column: true,
    },
  ],
};
