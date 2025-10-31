import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { B3AvatarComponent } from '@b3/components/avatar/avatar.component';
import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3CardComponent } from '@b3/components/card/card.component';
import { B3CheckboxComponent } from '@b3/components/checkbox/checkbox.component';
import { B3IconComponent } from '@b3/components/icon/icon.component';
import { B3InputDirective } from '@b3/components/input/input.directive';
import { B3ProgressBarComponent } from '@b3/components/progress-bar/progress-bar.component';
import { B3SwitchComponent } from '@b3/components/switch/switch.component';
import { B3TooltipModule } from '@b3/components/tooltip/tooltip';

import { B3CarouselComponent, B3CarouselItemComponent } from './carousel/carousel.component';

@Component({
  selector: 'b3-showcase',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 pl-4">
      <header class="grid items-center justify-center mb-16 text-center">
        <h2 class="text-3xl sm:text-4xl xl:text-6xl font-bold tracking-tight mb-4">Beautiful Components</h2>
        <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed pr-4 md:pr-0">
          Production-ready components that you can copy and paste into your apps. Accessible, customizable, and open source.
        </p>
      </header>

      <main class="mb-24 pr-4 md:pr-0">
        <div class="relative overflow-hidden">
          <b3-carousel class="max-w-4xl mx-auto showcase-carousel" [itemsPerView]="3.2" [infinite]="false" [showNavigation]="true" [showDots]="false">
            @for (component of showcaseComponents(); track component.type; let i = $index) {
              <b3-carousel-item class="md:pr-6">
                <b3-card
                  [zTitle]="component.title"
                  [class]="'h-[340px] w-[94%] md:w-72 flex flex-col pb-6 ' + component.bgClass + (component.isCtaCard ? ' cursor-pointer' : '')"
                  (click)="component.isCtaCard ? navigateToComponents() : null"
                >
                  <div class="flex items-center justify-center flex-1 p-8 min-h-[200px]">
                    <div class="w-full flex items-center justify-center">
                      @switch (component.type) {
                        @case ('button') {
                          <b3-button>Click me</b3-button>
                        }
                        @case ('badge') {
                          <b3-badge>New</b3-badge>
                        }
                        @case ('input') {
                          <input b3-input placeholder="Enter your email..." class="max-w-48" />
                        }
                        @case ('checkbox') {
                          <b3-checkbox>Accept terms</b3-checkbox>
                        }
                        @case ('switch') {
                          <b3-switch></b3-switch>
                        }
                        @case ('progress') {
                          <b3-progress-bar [progress]="65"></b3-progress-bar>
                        }
                        @case ('avatar') {
                          <b3-avatar zSrc="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" zAlt="John Doe"></b3-avatar>
                        }
                        @case ('tooltip') {
                          <button zTooltip="This is a helpful tooltip!" class="bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">
                            Hover me
                          </button>
                        }
                        @case ('cta') {
                          <div class="text-center">
                            <div class="flex items-center justify-center p-2 rounded-2xl bg-white/10 backdrop-blur-sm">
                              <b3-icon zType="arrow-right" class="text-xl" />
                            </div>

                            <div>
                              <h3 class="text-xl font-semibold mb-2">View All</h3>
                              <p class="text-sm text-primary-foreground/80 leading-relaxed">30+ components<br />ready to use</p>
                            </div>
                          </div>
                        }
                      }
                    </div>
                  </div>
                  <p [class]="component.textClass + ' text-sm'">{{ component.description }}</p>
                </b3-card>
              </b3-carousel-item>
            }
          </b3-carousel>
        </div>
      </main>
    </section>
  `,
  imports: [
    RouterModule,
    B3CardComponent,
    B3CarouselComponent,
    B3CarouselItemComponent,
    B3ButtonComponent,
    B3BadgeComponent,
    B3InputDirective,
    B3CheckboxComponent,
    B3SwitchComponent,
    B3ProgressBarComponent,
    B3AvatarComponent,
    B3TooltipModule,
    B3IconComponent,
  ],
})
export class ShowcaseComponent {
  private readonly router = inject(Router);
  readonly itemWidth = 100 / 3.2;

  readonly showcaseComponents = signal([
    {
      title: 'Button',
      type: 'button' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Versatile button component with multiple variants and sizes.',
    },
    {
      title: 'Badge',
      type: 'badge' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Small status indicators and labels for UI elements.',
    },
    {
      title: 'Input',
      type: 'input' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Form input fields with validation and accessibility support.',
    },
    {
      title: 'Checkbox',
      type: 'checkbox' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Toggle controls for boolean states with smooth animations.',
    },
    {
      title: 'Switch',
      type: 'switch' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Toggle switches for settings and preferences.',
    },
    {
      title: 'Progress Bar',
      type: 'progress' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Visual indicators for loading states and progress tracking.',
    },
    {
      title: 'Avatar',
      type: 'avatar' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'User profile images with fallback support.',
    },
    {
      title: 'Tooltip',
      type: 'tooltip' as const,
      bgClass: '',
      textClass: 'text-muted-foreground',
      description: 'Contextual information displayed on hover or focus.',
    },
    {
      title: '',
      type: 'cta' as const,
      bgClass: 'bg-gradient-to-br from-primary/90 to-primary text-primary-foreground border-0 hover:from-primary hover:to-primary/90 transition-all duration-300',
      textClass: 'text-primary-foreground/80',
      description: '',
      isCtaCard: true,
    },
  ]);

  navigateToComponents(): void {
    this.router.navigate(['/docs/components']);
  }
}
