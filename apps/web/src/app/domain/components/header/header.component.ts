import { AsyncPipe } from '@angular/common';
import { Component, inject, HostListener, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import type { Observable } from 'rxjs';

import { B3BadgeComponent } from '@b3/components/badge/badge.component';
import { B3ButtonComponent } from '@b3/components/button/button.component';
import { B3DividerComponent } from '@b3/components/divider/divider.component';
import { environment } from '@b3/env/environment';

import { SOCIAL_MEDIAS } from '../../../shared/constants/medias.constant';
import { HEADER_PATHS } from '../../../shared/constants/routes.constant';
import { DarkModeService } from '../../../shared/services/darkmode.service';
import { GithubService } from '../../../shared/services/github.service';
import { DocResearcherComponent } from '../doc-researcher/doc-researcher.component';
import { MobileMenuComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'b3-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule, B3ButtonComponent, B3BadgeComponent, MobileMenuComponent, B3DividerComponent, AsyncPipe, DocResearcherComponent],
})
export class HeaderComponent {
  readonly docResearcher = viewChild.required(DocResearcherComponent);

  readonly headerPaths = HEADER_PATHS;
  readonly githubData = SOCIAL_MEDIAS.find(media => media.name === 'GitHub');
  readonly appVersion = environment.appVersion;
  private readonly githubService = inject(GithubService);
  private readonly darkmodeService = inject(DarkModeService);
  readonly $repoStars: Observable<number> = this.githubService.getStarsCount();

  toggleTheme(): void {
    this.darkmodeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.darkmodeService.getCurrentTheme();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardShortcut(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.docResearcher().openCommandDialog();
    }
  }
}
