import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeoService } from '@b3/shared/services/seo.service';

import { Contributor, GithubService } from '../../../shared/services/github.service';
import { ContributorsLoadingComponent } from '../../components/contributors/contributors-loading.component';
import { ContributorsComponent } from '../../components/contributors/contributors.component';
import { CreditCardComponent } from '../../components/credit-card/credit-card.component';
import { DocContentComponent } from '../../components/doc-content/doc-content.component';
import { DocHeadingComponent } from '../../components/doc-heading/doc-heading.component';
import { NavigationConfig } from '../../components/dynamic-anchor/dynamic-anchor.component';
import { FoundersLoadingComponent } from '../../components/founders/founders-loading.component';
import { FoundersComponent, FounderData } from '../../components/founders/founders.component';
import { ScrollSpyItemDirective } from '../../directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'b3-about',
  templateUrl: './about.page.html',
  standalone: true,
  imports: [
    CommonModule,
    DocContentComponent,
    DocHeadingComponent,
    ScrollSpyDirective,
    ScrollSpyItemDirective,
    FoundersComponent,
    FoundersLoadingComponent,
    ContributorsComponent,
    ContributorsLoadingComponent,
    CreditCardComponent,
  ],
})
export class AboutPage implements OnInit {
  private readonly githubService = inject(GithubService);
  private readonly seoService = inject(SeoService);
  activeAnchor?: string;

  ngOnInit(): void {
    this.seoService.setDocsSeo('About', 'Learn more about B3UI, our team, and the amazing contributors who make this project possible.', '/docs/about', 'og-credits.jpg');
  }
  contributors$: Observable<Contributor[]> = this.githubService.getContributors();
  founders$: Observable<FounderData[]>;

  private readonly founderMappings = {
    Luizgomess: {
      name: 'Luiz Gomes',
      role: 'Creator & Founder',
    },
    srizzon: {
      name: 'Samuel Rizzon',
      role: 'Co-Founder & Component Core Developer',
    },
  };

  readonly navigationConfig: NavigationConfig = {
    items: [
      { id: 'overview', label: 'Overview', type: 'core' },
      { id: 'founders', label: 'Founders', type: 'custom' },
      { id: 'contributors', label: 'Contributors', type: 'custom' },
      { id: 'credits', label: 'Credits', type: 'custom' },
    ],
  };

  readonly creditItems = [
    {
      title: 'shadcn/ui',
      description: "The design philosophy and component patterns that inspired B3UI's architecture and aesthetic.",
    },
    {
      title: 'TailwindCSS',
      description: "The utility-first CSS framework that powers B3UI's styling system and enables rapid customization.",
    },
    {
      title: 'NG-ZORRO',
      description: 'An enterprise-class Angular UI library that inspired B3UI with its exceptional developer experience and comprehensive component patterns.',
    },
    {
      title: 'Angular',
      description: "The powerful framework that provides the foundation for B3UI's reactive and performant components.",
    },
    {
      title: 'Nx',
      description: "The monorepo toolkit that enables B3UI's scalable development workflow and build optimization.",
    },
    {
      title: 'CVA',
      description: 'Class Variance Authority provides type-safe styling variants that make B3UI components highly customizable.',
    },
    {
      title: 'Open Source Community',
      description: 'The amazing developers worldwide who contribute ideas, feedback, and improvements to make B3UI better.',
    },
  ];

  filteredContributors$ = this.contributors$.pipe(map(contributors => contributors.filter(contributor => !this.isFounder(contributor.login))));

  constructor() {
    this.founders$ = this.contributors$.pipe(
      map(contributors =>
        contributors
          .filter(contributor => contributor.login in this.founderMappings)
          .map(contributor => ({
            ...contributor,
            ...this.founderMappings[contributor.login as keyof typeof this.founderMappings],
          }))
          .sort((a, b) => b.contributions - a.contributions),
      ),
    );
  }

  isFounder(login: string): boolean {
    return login in this.founderMappings;
  }
}
