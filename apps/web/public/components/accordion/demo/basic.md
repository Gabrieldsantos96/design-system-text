```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { B3AccordionItemComponent } from '../accordion-item.component';
import { B3AccordionComponent } from '../accordion.component';

@Component({
  selector: 'b3-demo-accordion-basic',
  standalone: true,
  imports: [B3AccordionComponent, B3AccordionItemComponent],
  template: `
    <b3-accordion zDefaultValue="item-2">
      <b3-accordion-item zValue="item-1" zTitle="A Study in Scarlet">
        The first case of Sherlock Holmes and Dr. Watson. They investigate a murder in London, which leads to a backstory involving Mormons in the U.S. Introduces Holmes’s
        deductive method.
      </b3-accordion-item>

      <b3-accordion-item zValue="item-2" zTitle="The Sign of Four" zDescription="Sir Arthur Conan Doyle">
        The first case of Sherlock Holmes and Dr. Watson. They investigate a murder in London, which leads to a backstory involving Mormons in the U.S. Introduces Holmes’s
        deductive method.</b3-accordion-item
      >

      <b3-accordion-item zValue="item-3" zTitle="The Hound of the Baskervilles">
        Holmes and Watson investigate the legend of a demonic hound haunting the Baskerville family. Set in the eerie Dartmoor moorlands, the story involves betrayal and greed.
      </b3-accordion-item>
    </b3-accordion>
  `,
})
export class B3DemoAccordionBasicComponent {}

```