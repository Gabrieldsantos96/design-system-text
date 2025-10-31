import { B3DemoAvatarBasicComponent } from './basic';
import { B3DemoAvatarStatusComponent } from './status';

export const AVATAR = {
  componentName: 'avatar',
  componentType: 'avatar',
  description: 'An image element with a fallback for representing the user.',
  examples: [
    {
      name: 'basic',
      component: B3DemoAvatarBasicComponent,
    },
    {
      name: 'status',
      component: B3DemoAvatarStatusComponent,
    },
  ],
};
