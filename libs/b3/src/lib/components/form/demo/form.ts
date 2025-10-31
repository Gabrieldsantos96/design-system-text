import { B3DemoFormComplexComponent } from './complex';
import { B3DemoFormDefaultComponent } from './default';
import { B3DemoFormReactiveComponent } from './reactive';
import { B3DemoFormValidationComponent } from './validation';

export const FORM = {
  componentName: 'form',
  componentType: 'form',
  description: 'Building forms with proper structure, validation, and accessibility using composable form components.',
  examples: [
    {
      name: 'default',
      component: B3DemoFormDefaultComponent,
    },
    {
      name: 'reactive',
      component: B3DemoFormReactiveComponent,
    },
    {
      name: 'validation',
      component: B3DemoFormValidationComponent,
    },
    {
      name: 'complex',
      component: B3DemoFormComplexComponent,
    },
  ],
};
