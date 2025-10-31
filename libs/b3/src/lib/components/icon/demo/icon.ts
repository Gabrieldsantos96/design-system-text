import { B3DemoIconColorsComponent } from './colors';
import { B3DemoIconDefaultComponent } from './default';
import { B3DemoIconSearchableComponent } from './searchable';
import { B3DemoIconSizesComponent } from './sizes';
import { B3DemoIconStrokeWidthComponent } from './stroke-width';

export const ICON = {
  componentName: 'icon',
  componentType: 'icon',
  description:
    "A versatile icon component that encapsulates lucide-angular's icons with a consistent API and styling, providing an abstraction layer that facilitates future icon library swapping.",
  examples: [
    {
      name: 'default',
      component: B3DemoIconDefaultComponent,
    },
    {
      name: 'sizes',
      component: B3DemoIconSizesComponent,
    },
    {
      name: 'colors',
      component: B3DemoIconColorsComponent,
    },
    {
      name: 'stroke-width',
      component: B3DemoIconStrokeWidthComponent,
    },
    {
      name: 'searchable',
      component: B3DemoIconSearchableComponent,
      fullWidth: true,
      flexAlign: 'start',
    },
  ],
};
