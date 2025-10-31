```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3ComboboxComponent, type B3ComboboxGroup, type B3ComboboxOption } from '../combobox.component';

@Component({
  selector: 'b3-demo-combobox-grouped',
  standalone: true,
  imports: [B3ComboboxComponent],
  template: `
    <b3-combobox
      [groups]="techGroups"
      [placeholder]="'Select technology...'"
      [searchPlaceholder]="'Search technology...'"
      [emptyText]="'No technology found.'"
      (zOnSelect)="onSelect($event)"
    />
  `,
})
export class B3DemoComboboxGroupedComponent {
  techGroups: B3ComboboxGroup[] = [
    {
      label: 'Frontend Frameworks',
      options: [
        { value: 'angular', label: 'Angular' },
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'svelte', label: 'Svelte' },
      ],
    },
    {
      label: 'Backend Frameworks',
      options: [
        { value: 'nestjs', label: 'NestJS' },
        { value: 'express', label: 'Express' },
        { value: 'fastify', label: 'Fastify' },
        { value: 'koa', label: 'Koa' },
      ],
    },
    {
      label: 'Full-Stack Frameworks',
      options: [
        { value: 'nextjs', label: 'Next.js' },
        { value: 'nuxtjs', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'sveltekit', label: 'SvelteKit' },
      ],
    },
  ];

  onSelect(option: B3ComboboxOption) {
    console.log('Selected:', option);
  }
}

```