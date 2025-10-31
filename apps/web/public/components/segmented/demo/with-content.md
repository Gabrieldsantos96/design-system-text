```angular-ts showLineNumbers
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { B3SegmentedComponent, B3SegmentedItemComponent } from '../segmented.component';

@Component({
  selector: 'zard-demo-segmented-with-content',
  standalone: true,
  imports: [CommonModule, B3SegmentedComponent, B3SegmentedItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <b3-segmented (zChange)="onSelectionChange($event)" [zDefaultValue]="selectedValue">
      <b3-segmented-item value="account" label="Account"></b3-segmented-item>
      <b3-segmented-item value="password" label="Password"></b3-segmented-item>
      <b3-segmented-item value="settings" label="Settings"></b3-segmented-item>
    </b3-segmented>

    <div class="mt-4 p-4 border rounded-lg">
      <div [ngSwitch]="selectedValue">
        <div *ngSwitchCase="'account'">
          <h3 class="text-lg font-semibold">Account Settings</h3>
          <p class="text-muted-foreground">Manage your account information and preferences.</p>
        </div>
        <div *ngSwitchCase="'password'">
          <h3 class="text-lg font-semibold">Password & Security</h3>
          <p class="text-muted-foreground">Update your password and security settings.</p>
        </div>
        <div *ngSwitchCase="'settings'">
          <h3 class="text-lg font-semibold">General Settings</h3>
          <p class="text-muted-foreground">Configure your general application preferences.</p>
        </div>
        <div *ngSwitchDefault>
          <p class="text-muted-foreground">Please select a tab to view content.</p>
        </div>
      </div>
    </div>
  `,
})
export class B3DemoSegmentedWithContentComponent {
  selectedValue = 'account';

  onSelectionChange(value: string) {
    this.selectedValue = value;
    console.log('Selected:', value);
  }
}

```