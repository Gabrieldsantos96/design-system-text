import { B3DemoSheetBasicComponent } from './basic';
import { B3DemoSheetDimensionsComponent } from './dimensions';
import { B3DemoSheetSideComponent } from './side';

export const SHEET = {
  componentName: 'sheet',
  componentType: 'sheet',
  description: 'Extends the Dialog component to display content that complements the main content of the screen.',
  examples: [
    {
      name: 'basic',
      component: B3DemoSheetBasicComponent,
    },
    {
      name: 'side',
      component: B3DemoSheetSideComponent,
    },
    {
      name: 'dimensions',
      component: B3DemoSheetDimensionsComponent,
    },
  ],
};
