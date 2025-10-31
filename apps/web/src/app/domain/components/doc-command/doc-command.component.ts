import { AfterViewInit, Component, inject, viewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import type { B3CommandComponent, B3CommandOption } from '@b3/components/command/command.component';
import { B3CommandModule } from '@b3/components/command/command.module';
import { B3DialogRef } from '@b3/components/dialog/dialog-ref';

import { SIDEBAR_PATHS } from '../../../shared/constants/routes.constant';

@Component({
  standalone: true,
  imports: [B3CommandModule],
  template: `
    <b3-command #commandRef class="md:min-w-[500px]" (zOnSelect)="handleCommand($event)">
      <b3-command-input placeholder="Search documentation..."></b3-command-input>
      <b3-command-list>
        <b3-command-empty>No results found.</b3-command-empty>

        <b3-command-option-group zLabel="Getting Started">
          @for (item of gettingStartedItems; track item.path) {
            <b3-command-option [zLabel]="item.name" [zValue]="'navigate:' + item.path" zIcon="file-text"> </b3-command-option>
          }
        </b3-command-option-group>

        <b3-command-divider></b3-command-divider>

        <b3-command-option-group zLabel="Components">
          @for (item of componentItems; track item.path) {
            <b3-command-option [zLabel]="item.name" [zValue]="'navigate:' + item.path" zIcon="layers"> </b3-command-option>
          }
        </b3-command-option-group>
      </b3-command-list>
    </b3-command>
  `,
})
export class CommandDocComponent implements AfterViewInit, OnDestroy {
  readonly commandComponent = viewChild.required<B3CommandComponent>('commandRef');
  private router = inject(Router);
  private dialogRef = inject(B3DialogRef);
  private escapeListener?: (event: KeyboardEvent) => void;

  readonly gettingStartedItems = SIDEBAR_PATHS[0].data.filter(item => item.available);
  readonly componentItems = SIDEBAR_PATHS[1].data.filter(item => item.available);

  ngAfterViewInit() {
    // Focus the command input when the component is initialized
    setTimeout(() => {
      this.commandComponent().focus();
    }, 0);

    // Add document-level escape listener
    this.escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        this.dialogRef.close();
      }
    };
    document.addEventListener('keydown', this.escapeListener);
  }

  ngOnDestroy() {
    // Clean up the escape listener
    if (this.escapeListener) {
      document.removeEventListener('keydown', this.escapeListener);
    }
  }

  handleCommand(option: B3CommandOption) {
    const value = option.value as string;
    if (value.startsWith('navigate:')) {
      const path = value.replace('navigate:', '');
      this.router.navigate([path]);
      this.dialogRef.close();
    }
  }
}
