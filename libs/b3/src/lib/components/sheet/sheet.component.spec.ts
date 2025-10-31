import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { B3SheetRef } from './sheet-ref';
import { B3SheetService } from './sheet.service';
import { B3ButtonComponent } from '../button/button.component';

@Component({
  template: `
    <button b3-button zType="outline" (click)="openSheet()">Open basic sheet</button>
    <button b3-button zType="outline" (click)="openSheetWithTemplate()">Open sheet with template</button>
    <button b3-button zType="outline" (click)="openSheetRightSide()">Open right side sheet</button>
    <button b3-button zType="outline" (click)="openSheetWithoutFooter()">Open sheet without footer</button>

    <ng-template #testTemplate let-sheetRef="sheetRef">
      <div data-testid="template-content">
        <p>Template content</p>
        <button (click)="sheetRef.close()">Close from template</button>
      </div>
    </ng-template>
  `,
  imports: [B3ButtonComponent],
  standalone: true,
})
class SheetTestHostComponent {
  private sheetService = inject(B3SheetService);

  @ViewChild('testTemplate', { static: true }) testTemplate!: TemplateRef<any>;
  public lastSheetRef?: B3SheetRef<any>;

  openSheet() {
    this.lastSheetRef = this.sheetService.create({
      zTitle: 'Test Sheet',
      zDescription: 'This is a test sheet.',
      zContent: 'Test content',
    });
  }

  openSheetWithTemplate() {
    this.lastSheetRef = this.sheetService.create({
      zTitle: 'Template Sheet',
      zContent: this.testTemplate,
    });
  }

  openSheetRightSide() {
    this.lastSheetRef = this.sheetService.create({
      zTitle: 'Right Side Sheet',
      zContent: 'Right side content',
      zSide: 'right',
    });
  }

  openSheetWithoutFooter() {
    this.lastSheetRef = this.sheetService.create({
      zTitle: 'No Footer Sheet',
      zContent: 'No footer content',
      zHideFooter: true,
    });
  }
}

describe('B3SheetComponent', () => {
  let component: SheetTestHostComponent;
  let fixture: ComponentFixture<SheetTestHostComponent>;
  let platformId: object;
  let sheetService: B3SheetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetTestHostComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SheetTestHostComponent);
    component = fixture.componentInstance;
    platformId = TestBed.inject(PLATFORM_ID);
    sheetService = TestBed.inject(B3SheetService);
    fixture.detectChanges();
  });

  afterEach(() => {
    // Clean up any open sheets
    const sheetElements = document.querySelectorAll('b3-sheet');
    sheetElements.forEach(sheet => sheet.remove());
  });

  function openSheet() {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
  }

  function openSheetByIndex(index: number) {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[index].click();
    fixture.detectChanges();
  }

  describe('Basic functionality', () => {
    it('should create a sheet when the button is clicked', () => {
      openSheet();

      const sheetElement = document.querySelector('b3-sheet');
      if (isPlatformBrowser(platformId)) {
        expect(sheetElement).toBeTruthy();
        expect(sheetElement?.getAttribute('data-state')).toBe('open');
      } else {
        expect(sheetElement).toBeNull();
      }
    });

    it('should display the sheet title, description and content', () => {
      openSheet();

      const sheetElement = document.querySelector('b3-sheet');

      if (isPlatformBrowser(platformId)) {
        expect(sheetElement).toBeTruthy();

        const titleElement = sheetElement?.querySelector('[data-testid="b3-title"]');
        expect(titleElement).toBeTruthy();
        expect(titleElement?.textContent).toContain('Test Sheet');

        const descriptionElement = sheetElement?.querySelector('[data-testid="b3-description"]');
        expect(descriptionElement).toBeTruthy();
        expect(descriptionElement?.textContent).toContain('This is a test sheet.');

        const contentElement = sheetElement?.querySelector('[data-testid="b3-content"]');
        expect(contentElement).toBeTruthy();
        expect(contentElement?.textContent).toContain('Test content');
      } else {
        expect(sheetElement).toBeNull();
      }
    });
  });

  describe('Sheet interactions', () => {
    it('should close the sheet when the cancel button is clicked', async () => {
      openSheet();

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const cancelButton = sheetElement?.querySelector<HTMLButtonElement>('[data-testid="b3-cancel-button"]');
        expect(cancelButton).toBeTruthy();
        cancelButton?.click();
        fixture.detectChanges();

        await new Promise(resolve => setTimeout(resolve, 350));
        expect(document.querySelector('b3-sheet')).toBeNull();
      }
    });

    it('should close the sheet when the ok button is clicked', async () => {
      openSheet();

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const okButton = sheetElement?.querySelector<HTMLButtonElement>('[data-testid="b3-ok-button"]');
        expect(okButton).toBeTruthy();
        okButton?.click();
        fixture.detectChanges();

        await new Promise(resolve => setTimeout(resolve, 350));
        expect(document.querySelector('b3-sheet')).toBeNull();
      }
    });

    it('should close the sheet when the x button is clicked', async () => {
      openSheet();

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const closeButton = sheetElement?.querySelector<HTMLButtonElement>('[data-testid="b3-close-header-button"]');
        expect(closeButton).toBeTruthy();
        closeButton?.click();
        fixture.detectChanges();

        await new Promise(resolve => setTimeout(resolve, 350));
        expect(document.querySelector('b3-sheet')).toBeNull();
      }
    });
  });

  describe('Sheet variants', () => {
    it('should create a sheet with right side variant', () => {
      openSheetByIndex(2); // Right side sheet button

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();
        expect(sheetElement?.classList.contains('right-0')).toBeTruthy();
        expect(sheetElement?.classList.contains('border-l')).toBeTruthy();
      }
    });

    it('should create a sheet without footer when hideFooter is true', () => {
      openSheetByIndex(3); // No footer sheet button

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const footerElement = sheetElement?.querySelector('[data-slot="sheet-footer"]');
        expect(footerElement).toBeNull();

        const okButton = sheetElement?.querySelector('[data-testid="b3-ok-button"]');
        const cancelButton = sheetElement?.querySelector('[data-testid="b3-cancel-button"]');
        expect(okButton).toBeNull();
        expect(cancelButton).toBeNull();
      }
    });
  });

  describe('Template content', () => {
    it('should render template content correctly', () => {
      openSheetByIndex(1); // Template sheet button

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const templateContent = sheetElement?.querySelector('[data-testid="template-content"]');
        expect(templateContent).toBeTruthy();
        expect(templateContent?.textContent).toContain('Template content');
      }
    });
  });

  describe('SSR compatibility', () => {
    it('should handle SSR environment gracefully', () => {
      openSheet();

      if (!isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeNull();
        expect(component.lastSheetRef).toBeTruthy();
      }
    });
  });

  describe('Sheet service', () => {
    it('should create sheet with custom configuration', () => {
      const sheetRef = sheetService.create({
        zTitle: 'Custom Sheet',
        zContent: 'Custom content',
        zOkText: 'Save',
        zCancelText: 'Discard',
        zSide: 'top',
      });

      expect(sheetRef).toBeTruthy();

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet') as HTMLElement;
        expect(sheetElement).toBeTruthy();
      }
    });

    it('should apply custom width and height', async () => {
      const sheetRef = sheetService.create({
        zTitle: 'Custom Dimensions Sheet',
        zContent: 'Custom content',
        zSide: 'right',
        zWidth: '500px',
        zHeight: '80vh',
      });

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet') as HTMLElement;
        expect(sheetElement).toBeTruthy();

        // Wait for change detection
        fixture.detectChanges();
        await fixture.whenStable();

        // Check that custom dimensions are applied via CSS variables
        expect(sheetElement.style.width).toBe('500px');
        expect(sheetElement.style.height).toBe('80vh');
      }
    });

    it('should apply default dimensions based on side', async () => {
      const sheetRef = sheetService.create({
        zTitle: 'Default Dimensions Sheet',
        zContent: 'Default content',
        zSide: 'left',
      });

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet') as HTMLElement;
        expect(sheetElement).toBeTruthy();

        // Wait for change detection
        fixture.detectChanges();
        await fixture.whenStable();

        // Check that default dimensions use Tailwind classes (no inline styles)
        expect(sheetElement.style.width).toBe('');
        expect(sheetElement.style.height).toBe('');
        expect(sheetElement?.classList.contains('w-3/4')).toBeTruthy();
        expect(sheetElement?.classList.contains('h-full')).toBeTruthy();
      }
    });

    it('should handle sheet callbacks', () => {
      let okClicked = false;
      let cancelClicked = false;

      const sheetRef = sheetService.create({
        zTitle: 'Callback Sheet',
        zContent: 'Callback content',
        zOnOk: () => {
          okClicked = true;
          return false;
        }, // return false to prevent closing
        zOnCancel: () => {
          cancelClicked = true;
          return false;
        }, // return false to prevent closing
      });

      if (isPlatformBrowser(platformId)) {
        const sheetElement = document.querySelector('b3-sheet');
        expect(sheetElement).toBeTruthy();

        const okButton = sheetElement?.querySelector<HTMLButtonElement>('[data-testid="b3-ok-button"]');
        const cancelButton = sheetElement?.querySelector<HTMLButtonElement>('[data-testid="b3-cancel-button"]');

        if (okButton && cancelButton) {
          okButton.click();
          fixture.detectChanges();
          expect(okClicked).toBeTruthy();

          cancelButton.click();
          fixture.detectChanges();
          expect(cancelClicked).toBeTruthy();
        }
      }
    });
  });
});
