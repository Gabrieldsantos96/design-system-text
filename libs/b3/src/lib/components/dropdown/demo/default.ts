import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3DividerComponent } from '../../divider/divider.component';
import { B3DropdownModule } from '../dropdown.module';

@Component({
  selector: 'b3-dropdown-demo',
  standalone: true,
  imports: [B3DropdownModule, B3ButtonComponent, B3DividerComponent],
  template: `
    <button b3-button zType="outline" b3-dropdown [zDropdownMenu]="menu">Open</button>

    <b3-dropdown-menu-content #menu="zDropdownMenuContent" class="w-56">
      <b3-dropdown-menu-label>My Account</b3-dropdown-menu-label>

      <b3-dropdown-menu-item (click)="onProfile()">
        Profile
        <b3-dropdown-menu-shortcut>⇧⌘P</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>

      <b3-dropdown-menu-item (click)="onBilling()">
        Billing
        <b3-dropdown-menu-shortcut>⌘B</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>

      <b3-dropdown-menu-item (click)="onSettings()">
        Settings
        <b3-dropdown-menu-shortcut>⌘S</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>

      <b3-dropdown-menu-item (click)="onKeyboardShortcuts()">
        Keyboard shortcuts
        <b3-dropdown-menu-shortcut>⌘K</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>

      <b3-divider zSpacing="sm" class="-mx-1"></b3-divider>

      <b3-dropdown-menu-item (click)="onTeam()">Team</b3-dropdown-menu-item>

      <b3-dropdown-menu-item (click)="onNewTeam()">
        New Team
        <b3-dropdown-menu-shortcut>⌘+T</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>

      <b3-divider zSpacing="sm" class="-mx-1"></b3-divider>

      <b3-dropdown-menu-item (click)="onGitHub()">GitHub</b3-dropdown-menu-item>
      <b3-dropdown-menu-item (click)="onSupport()">Support</b3-dropdown-menu-item>
      <b3-dropdown-menu-item disabled="true">API</b3-dropdown-menu-item>

      <b3-divider zSpacing="sm" class="-mx-1"></b3-divider>

      <b3-dropdown-menu-item (click)="onLogout()">
        Log out
        <b3-dropdown-menu-shortcut>⇧⌘Q</b3-dropdown-menu-shortcut>
      </b3-dropdown-menu-item>
    </b3-dropdown-menu-content>
  `,
})
export class B3DropdownDemoComponent {
  onProfile() {
    console.log('Profile clicked');
  }

  onBilling() {
    console.log('Billing clicked');
  }

  onSettings() {
    console.log('Settings clicked');
  }

  onKeyboardShortcuts() {
    console.log('Keyboard shortcuts clicked');
  }

  onTeam() {
    console.log('Team clicked');
  }

  onNewTeam() {
    console.log('New Team clicked');
  }

  onGitHub() {
    console.log('GitHub clicked');
  }

  onSupport() {
    console.log('Support clicked');
  }

  onLogout() {
    console.log('Log out clicked');
  }
}
