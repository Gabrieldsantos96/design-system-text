import { Component } from '@angular/core';

import { B3ButtonComponent } from '../../button/button.component';
import { B3DividerComponent } from '../../divider/divider.component';
import { B3IconComponent } from '../../icon/icon.component';
import { B3MenuModule } from '../menu.module';

@Component({
  selector: 'b3-demo-menu-default',
  standalone: true,
  imports: [B3MenuModule, B3ButtonComponent, B3DividerComponent, B3IconComponent],
  template: `
    <nav class="flex items-center justify-between p-4">
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-1">
          <div class="relative">
            <button b3-button zType="ghost" b3-menu zTrigger="hover" [zMenuTriggerFor]="productsMenu">
              Products
              <b3-icon zType="chevron-down" class="ml-1" />
            </button>

            <ng-template #productsMenu>
              <div b3-menu-content class="w-48">
                <button b3-menu-item (click)="log('Analytics')">Analytics</button>
                <button b3-menu-item (click)="log('Dashboard')">Dashboard</button>
                <button b3-menu-item (click)="log('Reports')">Reports</button>
                <button b3-menu-item zDisabled (click)="log('Insights')">Insights</button>
              </div>
            </ng-template>
          </div>

          <div class="relative">
            <button b3-button zType="ghost" b3-menu zTrigger="hover" [zMenuTriggerFor]="solutionsMenu">
              Solutions
              <b3-icon zType="chevron-down" class="ml-1" />
            </button>

            <ng-template #solutionsMenu>
              <div b3-menu-content class="w-80 p-2">
                <div class="grid gap-1">
                  <button b3-menu-item (click)="log('For Startups')" class="flex flex-col items-start h-auto py-3">
                    <div class="text-sm font-medium">For Startups</div>
                    <div class="text-xs text-muted-foreground mt-1">Get started quickly with our startup-friendly tools</div>
                  </button>

                  <button b3-menu-item (click)="log('For Enterprise')" class="flex flex-col items-start h-auto py-3">
                    <div class="text-sm font-medium">For Enterprise</div>
                    <div class="text-xs text-muted-foreground mt-1">Scale your business with enterprise-grade features</div>
                  </button>

                  <button b3-menu-item (click)="log('For Agencies')" class="flex flex-col items-start h-auto py-3">
                    <div class="text-sm font-medium">For Agencies</div>
                    <div class="text-xs text-muted-foreground mt-1">Manage multiple clients with our agency tools</div>
                  </button>
                </div>
              </div>
            </ng-template>
          </div>

          <div class="relative">
            <button b3-button zType="ghost" b3-menu zTrigger="hover" [zMenuTriggerFor]="resourcesMenu">
              Resources
              <b3-icon zType="chevron-down" />
            </button>

            <ng-template #resourcesMenu>
              <div b3-menu-content class="w-56">
                <button b3-menu-item (click)="log('Blog')">
                  <b3-icon zType="book-open" class="mr-2" />
                  Blog
                </button>

                <button b3-menu-item (click)="log('Documentation')">
                  <b3-icon zType="file-text" class="mr-2" />
                  Documentation
                </button>

                <button b3-menu-item b3-menu [zMenuTriggerFor]="helpSubmenu" zPlacement="rightTop" class="justify-between">
                  <div class="flex items-center"><b3-icon zType="info" class="mr-2" /> Help & Support</div>
                  <b3-icon zType="chevron-right" />
                </button>

                <b3-divider zSpacing="sm"></b3-divider>

                <button b3-menu-item (click)="log('Community')">
                  <b3-icon zType="users" class="mr-2" />
                  Community
                </button>
              </div>
            </ng-template>

            <ng-template #helpSubmenu>
              <div b3-menu-content class="w-48">
                <button b3-menu-item (click)="log('Getting Started')">Getting Started</button>
                <button b3-menu-item (click)="log('Tutorials')">Tutorials</button>
                <button b3-menu-item (click)="log('FAQ')">FAQ</button>

                <b3-divider zSpacing="sm"></b3-divider>

                <button b3-menu-item (click)="log('Contact Support')">Contact Support</button>
                <button b3-menu-item (click)="log('Live Chat')">Live Chat</button>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class B3DemoMenuDefaultComponent {
  log(item: string) {
    console.log('Navigate to:', item);
  }
}
