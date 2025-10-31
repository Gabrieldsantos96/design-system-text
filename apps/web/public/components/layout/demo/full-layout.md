```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';

import { SidebarComponent, SidebarGroupComponent, SidebarGroupLabelComponent } from '../sidebar.component';
import { B3SkeletonComponent } from '../../skeleton/skeleton.component';
import { B3ButtonComponent } from '../../button/button.component';
import { B3IconComponent } from '../../icon/icon.component';
import { ContentComponent } from '../content.component';
import { LayoutComponent } from '../layout.component';
import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'b3-demo-layout-full',
  standalone: true,
  imports: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    SidebarGroupComponent,
    SidebarGroupLabelComponent,
    B3ButtonComponent,
    B3SkeletonComponent,
    B3IconComponent,
  ],
  template: `
    <b3-layout class="min-h-[600px] border rounded-md overflow-hidden">
      <b3-header>
        <div class="flex items-center justify-between w-full">
          <div class="font-semibold text-lg flex items-center">
            <img src="images/zard.svg" alt="Logo" width="24" height="24" />
            <span class="ml-2">B3UI</span>
          </div>
          <div class="flex items-center gap-2">
            <button b3-button zType="ghost" zSize="sm">
              <b3-icon zType="search" />
            </button>
            <button b3-button zType="ghost" zSize="sm">
              <b3-icon zType="bell" />
            </button>
          </div>
        </div>
      </b3-header>

      <b3-layout>
        <b3-sidebar [zWidth]="200" class="!p-0">
          <nav class="flex flex-col h-full gap-2 p-4">
            <b3-sidebar-group>
              <b3-sidebar-group-label>Menu</b3-sidebar-group-label>
              <button b3-button zType="secondary" class="justify-start">
                <b3-icon zType="house" class="mr-2" />
                Dashboard
              </button>
              <button b3-button zType="ghost" class="justify-start">
                <b3-icon zType="layers" class="mr-2" />
                Projects
              </button>
              <button b3-button zType="ghost" class="justify-start">
                <b3-icon zType="users" class="mr-2" />
                Team
              </button>
            </b3-sidebar-group>
          </nav>
        </b3-sidebar>

        <b3-layout>
          <b3-content class="min-h-[200px]">
            <div class="space-y-4">
              <b3-skeleton class="h-32 w-full"></b3-skeleton>
              <b3-skeleton class="h-48 w-full"></b3-skeleton>
              <b3-skeleton class="h-24 w-full"></b3-skeleton>
            </div>
          </b3-content>

          <b3-footer>
            <div class="flex items-center justify-center w-full text-sm text-muted-foreground">© {{ year }} B3UI</div>
          </b3-footer>
        </b3-layout>
      </b3-layout>
    </b3-layout>
  `,
})
export class LayoutDemoFullComponent {
  year = new Date().getFullYear();
}

```