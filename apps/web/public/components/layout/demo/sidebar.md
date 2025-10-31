```angular-ts showLineNumbers copyButton
import { Component, signal } from '@angular/core';

import { B3AvatarComponent } from '../../avatar/avatar.component';
import { B3BreadcrumbModule } from '../../breadcrumb/breadcrumb.module';
import { B3ButtonComponent } from '../../button/button.component';
import { B3DividerComponent } from '../../divider/divider.component';
import { B3IconComponent } from '../../icon/icon.component';
import type { B3Icon } from '../../icon/icons';
import { B3MenuModule } from '../../menu/menu.module';
import { B3SkeletonComponent } from '../../skeleton/skeleton.component';
import { B3TooltipModule } from '../../tooltip/tooltip';
import { LayoutModule } from '../layout.module';

interface MenuItem {
  icon: B3Icon;
  label: string;
  submenu?: { label: string }[];
}

@Component({
  selector: 'b3-demo-layout-collapsible',
  standalone: true,
  imports: [
    LayoutModule,
    B3ButtonComponent,
    B3BreadcrumbModule,
    B3MenuModule,
    B3SkeletonComponent,
    B3TooltipModule,
    B3DividerComponent,
    B3AvatarComponent,
    B3IconComponent,
  ],
  template: `
    <!-- border and rounded-md are just for the demo purpose -->
    <b3-layout class="border rounded-md overflow-hidden">
      <b3-sidebar [zWidth]="250" [zCollapsible]="true" [zCollapsed]="sidebarCollapsed()" [zCollapsedWidth]="70" (zCollapsedChange)="onCollapsedChange($event)" class="!p-0">
        <nav [class]="'flex flex-col h-full overflow-hidden ' + (sidebarCollapsed() ? 'gap-1 p-1 pt-4' : 'gap-4 p-4')">
          <b3-sidebar-group>
            @if (!sidebarCollapsed()) {
              <b3-sidebar-group-label>Main</b3-sidebar-group-label>
            }
            @for (item of mainMenuItems; track item.label) {
              <button b3-button zType="ghost" [class]="sidebarCollapsed() ? 'justify-center' : 'justify-start'" [zTooltip]="sidebarCollapsed() ? item.label : ''" zPosition="right">
                <b3-icon [zType]="item.icon" [class]="sidebarCollapsed() ? '' : ' mr-2'"></b3-icon>
                @if (!sidebarCollapsed()) {
                  <span>{{ item.label }}</span>
                }
              </button>
            }
          </b3-sidebar-group>

          <b3-sidebar-group>
            @if (!sidebarCollapsed()) {
              <b3-sidebar-group-label>Workspace</b3-sidebar-group-label>
            }
            @for (item of workspaceMenuItems; track item.label) {
              @if (item.submenu) {
                <button
                  b3-button
                  zType="ghost"
                  b3-menu
                  [zMenuTriggerFor]="submenu"
                  zPlacement="rightTop"
                  [class]="sidebarCollapsed() ? 'justify-center' : 'justify-start'"
                  [zTooltip]="sidebarCollapsed() ? item.label : null"
                  zPosition="right"
                >
                  <b3-icon [zType]="item.icon" [class]="sidebarCollapsed() ? '' : ' mr-2'"></b3-icon>
                  @if (!sidebarCollapsed()) {
                    <span class="flex-1 text-left">{{ item.label }}</span>
                    <b3-icon zType="chevron-right" />
                  }
                </button>

                <ng-template #submenu>
                  <div b3-menu-content class="w-48">
                    @for (subitem of item.submenu; track subitem.label) {
                      <button b3-menu-item>{{ subitem.label }}</button>
                    }
                  </div>
                </ng-template>
              } @else {
                <button
                  b3-button
                  zType="ghost"
                  [class]="sidebarCollapsed() ? 'justify-center' : 'justify-start'"
                  [zTooltip]="sidebarCollapsed() ? item.label : ''"
                  zPosition="right"
                >
                  <b3-icon [zType]="item.icon" [class]="sidebarCollapsed() ? '' : ' mr-2'"></b3-icon>
                  @if (!sidebarCollapsed()) {
                    <span>{{ item.label }}</span>
                  }
                </button>
              }
            }
          </b3-sidebar-group>

          <div class="mt-auto">
            <div
              b3-menu
              [zMenuTriggerFor]="userMenu"
              zPlacement="rightBottom"
              [class]="'flex items-center justify-center gap-2 cursor-pointer rounded-md hover:bg-accent ' + (sidebarCollapsed() ? 'p-0 m-2' : 'p-2')"
            >
              <b3-avatar zSrc="https://zardui.com/images/avatar/imgs/avatar_image.jpg" zAlt="B3 UI" />

              @if (!sidebarCollapsed()) {
                <div>
                  <span class="font-medium">zardui</span>
                  <div class="text-xs">test&#64;zardui.com</div>
                </div>

                <b3-icon zType="chevrons-up-down" class="ml-auto" />
              }
            </div>

            <ng-template #userMenu>
              <div b3-menu-content class="w-48">
                <button b3-menu-item>
                  <b3-icon zType="user" class="mr-2" />
                  Profile
                </button>
                <button b3-menu-item>
                  <b3-icon zType="settings" class="mr-2" />
                  Settings
                </button>
                <b3-divider zSpacing="sm" />
                <button b3-menu-item>
                  <b3-icon zType="log-out" class="mr-2" />
                  Logout
                </button>
              </div>
            </ng-template>
          </div>
        </nav>
      </b3-sidebar>

      <!-- min-h-[200px] is just for the demo purpose to have a minimum height -->
      <b3-content class="min-h-[200px]">
        <div class="flex items-center">
          <button b3-button zType="ghost" zSize="sm" class="-ml-2" (click)="toggleSidebar()">
            <b3-icon zType="panel-left" />
          </button>

          <b3-divider zOrientation="vertical" class="h-4 ml-2" />

          <b3-breadcrumb zWrap="wrap" zAlign="start">
            <b3-breadcrumb-item [routerLink]="['/docs/components/layout']">Home</b3-breadcrumb-item>
            <b3-breadcrumb-item>
              <span aria-current="page">Components</span>
            </b3-breadcrumb-item>
          </b3-breadcrumb>
        </div>

        <div class="space-y-4 py-4">
          <b3-skeleton class="h-80 w-full"></b3-skeleton>
          <b3-skeleton class="h-16 w-full"></b3-skeleton>
        </div>
      </b3-content>
    </b3-layout>
  `,
})
export class LayoutDemoSidebarComponent {
  sidebarCollapsed = signal(false);

  mainMenuItems: MenuItem[] = [
    { icon: 'house', label: 'Home' },
    { icon: 'inbox', label: 'Inbox' },
  ];

  workspaceMenuItems: MenuItem[] = [
    {
      icon: 'folder',
      label: 'Projects',
      submenu: [{ label: 'Design System' }, { label: 'Mobile App' }, { label: 'Website' }],
    },
    { icon: 'calendar', label: 'Calendar' },
    { icon: 'search', label: 'Search' },
  ];

  toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }

  onCollapsedChange(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }
}

```