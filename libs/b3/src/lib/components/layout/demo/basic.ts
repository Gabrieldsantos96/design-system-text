import { Component } from '@angular/core';

import { ContentComponent } from '../content.component';
import { FooterComponent } from '../footer.component';
import { HeaderComponent } from '../header.component';
import { LayoutComponent } from '../layout.component';
import { SidebarComponent } from '../sidebar.component';

@Component({
  selector: 'b3-demo-layout-basic',
  standalone: true,
  imports: [LayoutComponent, HeaderComponent, ContentComponent, FooterComponent, SidebarComponent],
  template: `
    <div class="flex flex-col gap-6 text-center">
      <b3-layout class="rounded-lg overflow-hidden">
        <b3-header class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Header</b3-header>
        <b3-content class="min-h-[200px] bg-[#0958d9] text-white">Content</b3-content>
        <b3-footer class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Footer</b3-footer>
      </b3-layout>

      <b3-layout class="rounded-lg overflow-hidden">
        <b3-header class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Header</b3-header>
        <b3-layout>
          <b3-sidebar class="bg-[#1677ff] text-white border-0" [zWidth]="120">Sidebar</b3-sidebar>
          <b3-content class="min-h-[200px] bg-[#0958d9] text-white">Content</b3-content>
        </b3-layout>
        <b3-footer class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Footer</b3-footer>
      </b3-layout>

      <b3-layout class="rounded-lg overflow-hidden">
        <b3-header class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Header</b3-header>
        <b3-layout>
          <b3-content class="min-h-[200px] bg-[#0958d9] text-white">Content</b3-content>
          <b3-sidebar class="bg-[#1677ff] text-white border-0" [zWidth]="120">Sidebar</b3-sidebar>
        </b3-layout>
        <b3-footer class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Footer</b3-footer>
      </b3-layout>

      <b3-layout class="rounded-lg overflow-hidden">
        <b3-sidebar class="bg-[#1677ff] text-white border-0" [zWidth]="120">Sidebar</b3-sidebar>
        <b3-layout>
          <b3-header class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Header</b3-header>
          <b3-content class="min-h-[200px] bg-[#0958d9] text-white">Content</b3-content>
          <b3-footer class="h-16 px-12 bg-[#4096ff] text-white border-0 justify-center">Footer</b3-footer>
        </b3-layout>
      </b3-layout>
    </div>
  `,
})
export class LayoutDemoBasicComponent {}
