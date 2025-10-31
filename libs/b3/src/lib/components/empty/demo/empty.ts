import { B3DemoEmptyCustomImageComponent } from './custom-image';
import { B3DemoEmptyCustomStyleComponent } from './custom-style';
import { B3DemoEmptyCustomTemplateComponent } from './custom-template';
import { B3DemoEmptyDefaultComponent } from './default';
import { B3DemoEmptySizeComponent } from './size';
import { B3DemoEmptyWithOtherComponent } from './with-other-components';
import { B3DemoEmptyWithoutDescriptionComponent } from './without-description';

export const EMPTY = {
  componentName: 'empty',
  componentPath: 'empty',
  description: 'Use the Empty component to display a empty state.',
  examples: [
    {
      name: 'default',
      component: B3DemoEmptyDefaultComponent,
    },
    {
      name: 'size',
      component: B3DemoEmptySizeComponent,
    },
    {
      name: 'custom-image',
      component: B3DemoEmptyCustomImageComponent,
    },
    {
      name: 'custom-template',
      component: B3DemoEmptyCustomTemplateComponent,
    },
    {
      name: 'custom-style',
      component: B3DemoEmptyCustomStyleComponent,
    },
    {
      name: 'without-description',
      component: B3DemoEmptyWithoutDescriptionComponent,
    },
    {
      name: 'with-other-components',
      component: B3DemoEmptyWithOtherComponent,
    },
  ],
};
