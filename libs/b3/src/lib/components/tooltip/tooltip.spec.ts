import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, viewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { B3TooltipDirective, B3TooltipModule } from './tooltip';

@Component({
  template: `
    <div #hoverTooltip zTooltip="Test Hover" #hoverDir="zTooltip"></div>
    <div #clickTooltip zTooltip="Test Click" zTrigger="click" #clickDir="zTooltip"></div>

    <div #topTooltip zTooltip="Test Click" #topDir="zTooltip"></div>
    <div #bottomTooltip zTooltip="Test Click" zPosition="bottom" #bottomDir="zTooltip"></div>
    <div #leftTooltip zTooltip="Test Click" zPosition="left" #leftDir="zTooltip"></div>
    <div #rightTooltip zTooltip="Test Click" zPosition="right" #rightDir="zTooltip"></div>
  `,
  imports: [B3TooltipModule],
  standalone: true,
})
class TestHostComponent {
  readonly hoverTooltip = viewChild.required<ElementRef>('hoverTooltip');
  readonly hoverTooltipDirective = viewChild.required<B3TooltipDirective>('hoverDir');

  readonly clickTooltip = viewChild.required<ElementRef>('clickTooltip');
  readonly clickTooltipDirective = viewChild.required<B3TooltipDirective>('clickDir');

  readonly topTooltip = viewChild.required<ElementRef>('topTooltip');
  readonly bottomTooltip = viewChild.required<ElementRef>('bottomTooltip');
  readonly leftTooltip = viewChild.required<ElementRef>('leftTooltip');
  readonly rightTooltip = viewChild.required<ElementRef>('rightTooltip');

  readonly topTooltipDirective = viewChild.required<B3TooltipDirective>('topDir');
  readonly bottomTooltipDirective = viewChild.required<B3TooltipDirective>('bottomDir');
  readonly leftTooltipDirective = viewChild.required<B3TooltipDirective>('leftDir');
  readonly rightTooltipDirective = viewChild.required<B3TooltipDirective>('rightDir');
}

describe('B3TooltipDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  function waitingForTooltipToggling(): void {
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
  }

  describe('visibility', () => {
    it('should show and hide the tooltip on hover', fakeAsync(() => {
      const tooltipTitle = 'Test Hover';
      const triggerElement = component.hoverTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();
      expect(overlayContainerElement.textContent).toContain(tooltipTitle);

      const overlayElement = component.hoverTooltipDirective().nativeElement;
      overlayElement.dispatchEvent(new MouseEvent('mouseleave'));
      waitingForTooltipToggling();

      expect(overlayContainerElement.textContent).not.toContain(tooltipTitle);
    }));

    it('should show and hide the tooltip on click', fakeAsync(() => {
      const tooltipTitle = 'Test Click';
      const triggerElement = component.clickTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('click'));
      waitingForTooltipToggling();
      expect(overlayContainerElement.textContent).toContain(tooltipTitle);

      document.body.click();
      waitingForTooltipToggling();

      expect(overlayContainerElement.textContent).not.toContain(tooltipTitle);
    }));
  });

  describe('position', () => {
    it('should show the tooltip on top', fakeAsync(() => {
      const triggerElement = component.topTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();

      const tooltipElement = overlayContainerElement.querySelector('[data-side]');
      expect(tooltipElement).toBeTruthy();
      expect(tooltipElement?.getAttribute('data-side')).toBe('top');
    }));

    it('should show the tooltip on bottom', fakeAsync(() => {
      const triggerElement = component.bottomTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();

      const tooltipElement = overlayContainerElement.querySelector('[data-side]');
      expect(tooltipElement).toBeTruthy();
      expect(tooltipElement?.getAttribute('data-side')).toBe('bottom');
    }));

    it('should show the tooltip on left', fakeAsync(() => {
      const triggerElement = component.leftTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();

      const tooltipElement = overlayContainerElement.querySelector('[data-side]');
      expect(tooltipElement).toBeTruthy();
      expect(tooltipElement?.getAttribute('data-side')).toBe('left');
    }));

    it('should show the tooltip on right', fakeAsync(() => {
      const triggerElement = component.rightTooltip().nativeElement;

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();

      const tooltipElement = overlayContainerElement.querySelector('[data-side]');
      expect(tooltipElement).toBeTruthy();
      expect(tooltipElement?.getAttribute('data-side')).toBe('right');
    }));
  });

  describe('events', () => {
    it('should emit zOnShow and zOnHide events', fakeAsync(() => {
      const triggerElement = component.hoverTooltip().nativeElement;
      const tooltipDirective = component.hoverTooltipDirective();

      const spyOnShow = jest.spyOn(tooltipDirective.zOnShow, 'emit');
      const spyOnHide = jest.spyOn(tooltipDirective.zOnHide, 'emit');

      triggerElement.dispatchEvent(new MouseEvent('mouseenter'));
      waitingForTooltipToggling();

      expect(spyOnShow).toHaveBeenCalled();

      triggerElement.dispatchEvent(new MouseEvent('mouseleave'));
      waitingForTooltipToggling();

      expect(spyOnHide).toHaveBeenCalled();
    }));
  });
});
