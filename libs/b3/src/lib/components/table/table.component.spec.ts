import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  B3TableBodyComponent,
  B3TableCaptionComponent,
  B3TableCellComponent,
  B3TableComponent,
  B3TableHeadComponent,
  B3TableHeaderComponent,
  B3TableRowComponent,
} from './table.component';

@Component({
  selector: 'test-striped-table',
  standalone: true,
  imports: [B3TableComponent],
  template: `<table b3-table zType="striped"></table>`,
})
class TestStripedTableComponent {}

@Component({
  selector: 'test-bordered-table',
  standalone: true,
  imports: [B3TableComponent],
  template: `<table b3-table zType="bordered"></table>`,
})
class TestBorderedTableComponent {}

@Component({
  selector: 'test-compact-table',
  standalone: true,
  imports: [B3TableComponent],
  template: `<table b3-table zSize="compact"></table>`,
})
class TestCompactTableComponent {}

@Component({
  selector: 'test-comfortable-table',
  standalone: true,
  imports: [B3TableComponent],
  template: `<table b3-table zSize="comfortable"></table>`,
})
class TestComfortableTableComponent {}

describe('TableComponents', () => {
  describe('B3TableComponent', () => {
    let component: B3TableComponent;
    let fixture: ComponentFixture<B3TableComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableComponent, TestStripedTableComponent, TestBorderedTableComponent, TestCompactTableComponent, TestComfortableTableComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default variant classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('w-full');
      expect(compiled.getAttribute('class')).toContain('caption-bottom');
      expect(compiled.getAttribute('class')).toContain('text-sm');
    });

    it('should apply striped variant classes', () => {
      const stripedFixture = TestBed.createComponent(TestStripedTableComponent);
      stripedFixture.detectChanges();
      const compiled = stripedFixture.nativeElement.querySelector('table');
      expect(compiled.getAttribute('class')).toContain('[&_tbody_tr:nth-child(odd)]:bg-muted/50');
    });

    it('should apply bordered variant classes', () => {
      const borderedFixture = TestBed.createComponent(TestBorderedTableComponent);
      borderedFixture.detectChanges();
      const compiled = borderedFixture.nativeElement.querySelector('table');
      expect(compiled.getAttribute('class')).toContain('border');
      expect(compiled.getAttribute('class')).toContain('border-border');
    });

    it('should apply compact size classes', () => {
      const compactFixture = TestBed.createComponent(TestCompactTableComponent);
      compactFixture.detectChanges();
      const compiled = compactFixture.nativeElement.querySelector('table');
      expect(compiled.getAttribute('class')).toContain('[&_td]:py-2');
      expect(compiled.getAttribute('class')).toContain('[&_th]:py-2');
    });

    it('should apply comfortable size classes', () => {
      const comfortableFixture = TestBed.createComponent(TestComfortableTableComponent);
      comfortableFixture.detectChanges();
      const compiled = comfortableFixture.nativeElement.querySelector('table');
      expect(compiled.getAttribute('class')).toContain('[&_td]:py-4');
      expect(compiled.getAttribute('class')).toContain('[&_th]:py-4');
    });
  });

  describe('B3TableHeaderComponent', () => {
    let component: B3TableHeaderComponent;
    let fixture: ComponentFixture<B3TableHeaderComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableHeaderComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableHeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('[&_tr]:border-b');
    });
  });

  describe('B3TableBodyComponent', () => {
    let component: B3TableBodyComponent;
    let fixture: ComponentFixture<B3TableBodyComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableBodyComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableBodyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('[&_tr:last-child]:border-0');
    });
  });

  describe('B3TableRowComponent', () => {
    let component: B3TableRowComponent;
    let fixture: ComponentFixture<B3TableRowComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableRowComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableRowComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('border-b');
      expect(compiled.getAttribute('class')).toContain('transition-colors');
      expect(compiled.getAttribute('class')).toContain('hover:bg-muted/50');
    });
  });

  describe('B3TableHeadComponent', () => {
    let component: B3TableHeadComponent;
    let fixture: ComponentFixture<B3TableHeadComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableHeadComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableHeadComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('h-10');
      expect(compiled.getAttribute('class')).toContain('px-2');
      expect(compiled.getAttribute('class')).toContain('text-left');
      expect(compiled.getAttribute('class')).toContain('align-middle');
      expect(compiled.getAttribute('class')).toContain('font-medium');
    });
  });

  describe('B3TableCellComponent', () => {
    let component: B3TableCellComponent;
    let fixture: ComponentFixture<B3TableCellComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableCellComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableCellComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('p-2');
      expect(compiled.getAttribute('class')).toContain('align-middle');
    });
  });

  describe('B3TableCaptionComponent', () => {
    let component: B3TableCaptionComponent;
    let fixture: ComponentFixture<B3TableCaptionComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [B3TableCaptionComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(B3TableCaptionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should apply default classes', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.getAttribute('class')).toContain('mt-4');
      expect(compiled.getAttribute('class')).toContain('text-sm');
      expect(compiled.getAttribute('class')).toContain('text-muted-foreground');
    });
  });
});
