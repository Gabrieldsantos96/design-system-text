import { Component, HostListener } from '@angular/core';

import type { B3CommandOption } from '../command.component';
import { B3CommandModule } from '../command.module';

@Component({
  selector: 'b3-demo-command-default',
  standalone: true,
  imports: [B3CommandModule],
  template: `
    <b3-command class="md:min-w-[500px]" (zOnSelect)="handleCommand($event)">
      <b3-command-input placeholder="Search actions, files, and more..."></b3-command-input>
      <b3-command-list>
        <b3-command-empty>No commands found.</b3-command-empty>

        <b3-command-option-group zLabel="Quick Actions">
          <b3-command-option zLabel="Create new project" zValue="new-project" zIcon="folder" zShortcut="⌘N"> </b3-command-option>
          <b3-command-option zLabel="Open file" zValue="open-file" zIcon="folder-open" zShortcut="⌘O"> </b3-command-option>
          <b3-command-option zLabel="Save all" zValue="save-all" zIcon="save" zShortcut="⌘S"> </b3-command-option>
        </b3-command-option-group>

        <b3-command-divider></b3-command-divider>

        <b3-command-option-group zLabel="Navigation">
          <b3-command-option zLabel="Go to Dashboard" zValue="dashboard" zIcon="layout-dashboard" zShortcut="⌘1"> </b3-command-option>
          <b3-command-option zLabel="Go to Projects" zValue="projects" zIcon="folder" zShortcut="⌘2"> </b3-command-option>
        </b3-command-option-group>

        <b3-command-divider></b3-command-divider>

        <b3-command-option-group zLabel="Tools">
          <b3-command-option zLabel="Open terminal" zValue="terminal" zIcon="terminal" zShortcut="⌘T"> </b3-command-option>
          <b3-command-option zLabel="Toggle theme" zValue="theme" zIcon="moon" zShortcut="⌘D"> </b3-command-option>
        </b3-command-option-group>
      </b3-command-list>
    </b3-command>
  `,
})
export class B3DemoCommandDefaultComponent {
  // Handle command selection
  handleCommand(option: B3CommandOption) {
    const action = `Executed "${option.label}" (value: ${option.value})`;
    console.log(action);

    // You can add real logic here
    switch (option.value) {
      case 'new-project':
        this.showAlert('Creating new project...');
        break;
      case 'open-file':
        this.showAlert('Opening file dialog...');
        break;
      case 'save-all':
        this.showAlert('Saving all files...');
        break;
      case 'dashboard':
        this.showAlert('Navigating to Dashboard...');
        break;
      case 'projects':
        this.showAlert('Navigating to Projects...');
        break;
      case 'terminal':
        this.showAlert('Opening terminal...');
        break;
      case 'theme':
        this.showAlert('Toggling theme...');
        break;
      default:
        this.showAlert(`Action: ${option.label}`);
    }
  }

  // Handle keyboard shortcuts
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.metaKey || event.ctrlKey) {
      switch (event.key.toLowerCase()) {
        case 'n':
          event.preventDefault();
          this.executeCommand('new-project', 'Create new project');
          break;
        case 'o':
          event.preventDefault();
          this.executeCommand('open-file', 'Open file');
          break;
        case 's':
          event.preventDefault();
          this.executeCommand('save-all', 'Save all');
          break;
        case '1':
          event.preventDefault();
          this.executeCommand('dashboard', 'Go to Dashboard');
          break;
        case '2':
          event.preventDefault();
          this.executeCommand('projects', 'Go to Projects');
          break;
        case 't':
          event.preventDefault();
          this.executeCommand('terminal', 'Open terminal');
          break;
        case 'd':
          event.preventDefault();
          this.executeCommand('theme', 'Toggle theme');
          break;
      }
    }
  }

  private executeCommand(value: string, label: string) {
    this.handleCommand({ value, label } as B3CommandOption);
  }

  private showAlert(message: string, isWarning = false) {
    if (isWarning) {
      console.warn(message);
    } else {
      console.log(message);
    }

    // In a real app, you might show a toast notification here
    setTimeout(() => {
      // You could clear the action after some time
    }, 3000);
  }
}
