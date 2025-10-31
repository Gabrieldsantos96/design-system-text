import { ViewportScroller } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BenefitsComponent } from '@b3/domain/components/benefits/benefits.component';
import { HeroComponent } from '@b3/domain/components/hero/hero.component';
import { ShowcaseComponent } from '@b3/domain/components/showcase/showcase.component';
import { SeoService } from '@b3/shared/services/seo.service';

@Component({
  selector: 'b3-home',
  standalone: true,
  imports: [RouterModule, HeroComponent, ShowcaseComponent, BenefitsComponent],
  template: `
    <b3-hero></b3-hero>
    <b3-showcase></b3-showcase>
    <b3-benefits></b3-benefits>
  `,
})
export class HomePage implements OnInit {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.seoService.setHomeSeo();
  }
}
