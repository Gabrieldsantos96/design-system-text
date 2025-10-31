import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { B3ButtonComponent } from '../../button/button.component';
import { B3InputDirective } from '../../input/input.directive';
import { B3PopoverComponent, B3PopoverDirective } from '../popover.component';

@Component({
  selector: 'b3-popover-interactive-demo',
  standalone: true,
  imports: [FormsModule, B3ButtonComponent, B3PopoverComponent, B3PopoverDirective, B3InputDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button b3-button zPopover [zContent]="interactiveContent" zType="outline" #popoverTrigger>Settings</button>

    <ng-template #interactiveContent>
      <b3-popover>
        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Settings</h4>
            <p class="text-sm text-muted-foreground">Manage your account settings.</p>
          </div>
          <div class="space-y-2">
            <label for="width" class="text-sm font-medium">Width</label>
            <input id="width" b3-input type="text" placeholder="100%" class="w-full" [(ngModel)]="width" />
          </div>
          <div class="space-y-2">
            <label for="height" class="text-sm font-medium">Height</label>
            <input id="height" b3-input type="text" placeholder="25px" class="w-full" [(ngModel)]="height" />
          </div>
          <button b3-button class="w-full" zSize="sm" (click)="saveChanges()">Save changes</button>
        </div>
      </b3-popover>
    </ng-template>
  `,
})
export class B3DemoPopoverInteractiveComponent {
  readonly popoverDirective = viewChild.required('popoverTrigger', { read: B3PopoverDirective });

  readonly width = signal('100%');
  readonly height = signal('25px');

  saveChanges() {
    console.log('Settings saved:', { width: this.width(), height: this.height() });
    this.popoverDirective().hide();
  }
}
