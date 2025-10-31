import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3FormFieldComponent, B3FormControlComponent, B3FormLabelComponent, B3FormMessageComponent } from './form.component';

describe('B3FormFieldComponent', () => {
  let component: B3FormFieldComponent;
  let fixture: ComponentFixture<B3FormFieldComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3FormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3FormFieldComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(nativeElement.className).toContain('grid');
    expect(nativeElement.className).toContain('gap-2');
  });

  it('should merge custom classes', () => {
    fixture.componentRef.setInput('class', 'custom-class');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('custom-class');
  });

  it('should project content', () => {
    const compiled = fixture.nativeElement;
    const content = document.createElement('span');
    content.textContent = 'Test content';
    compiled.appendChild(content);
    expect(compiled.textContent).toContain('Test content');
  });
});

describe('B3FormControlComponent', () => {
  let component: B3FormControlComponent;
  let fixture: ComponentFixture<B3FormControlComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3FormControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3FormControlComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should merge custom classes', () => {
    fixture.componentRef.setInput('class', 'custom-control-class');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('custom-control-class');
  });

  it('should display error message when provided', () => {
    fixture.componentRef.setInput('errorMessage', 'This field is required');
    fixture.detectChanges();
    const errorElement = nativeElement.querySelector('.text-red-500');
    expect(errorElement).toBeTruthy();
    expect(errorElement?.textContent).toContain('This field is required');
  });

  it('should display help text when provided and no error', () => {
    fixture.componentRef.setInput('helpText', 'Enter your name');
    fixture.detectChanges();
    const helpElement = nativeElement.querySelector('.text-muted-foreground');
    expect(helpElement).toBeTruthy();
    expect(helpElement?.textContent).toContain('Enter your name');
  });

  it('should prioritize error message over help text', () => {
    fixture.componentRef.setInput('errorMessage', 'Error message');
    fixture.componentRef.setInput('helpText', 'Help text');
    fixture.detectChanges();
    const errorElement = nativeElement.querySelector('.text-red-500');
    const helpElement = nativeElement.querySelector('.text-muted-foreground');
    expect(errorElement).toBeTruthy();
    expect(helpElement).toBeFalsy();
  });

  it('should project content', () => {
    const compiled = fixture.nativeElement;
    const content = document.createElement('input');
    compiled.querySelector('.relative')?.appendChild(content);
    expect(compiled.querySelector('input')).toBeTruthy();
  });
});

describe('B3FormLabelComponent', () => {
  let component: B3FormLabelComponent;
  let fixture: ComponentFixture<B3FormLabelComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3FormLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3FormLabelComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default label classes', () => {
    expect(nativeElement.className).toContain('text-sm');
    expect(nativeElement.className).toContain('font-medium');
    expect(nativeElement.className).toContain('leading-none');
  });

  it('should add required indicator when zRequired is true', () => {
    fixture.componentRef.setInput('zRequired', true);
    fixture.detectChanges();
    expect(nativeElement.className).toContain("after:content-['*']");
    expect(nativeElement.className).toContain('after:ml-0.5');
    expect(nativeElement.className).toContain('after:text-red-500');
  });

  it('should not add required indicator when zRequired is false', () => {
    fixture.componentRef.setInput('zRequired', false);
    fixture.detectChanges();
    expect(nativeElement.className).not.toContain("after:content-['*']");
  });

  it('should handle string input for zRequired', () => {
    // Empty string is transformed to true by the transform function
    fixture.componentRef.setInput('zRequired', '');
    fixture.detectChanges();
    expect(nativeElement.className).toContain("after:content-['*']");
    expect(nativeElement.className).toContain('after:ml-0.5');
    expect(nativeElement.className).toContain('after:text-red-500');
  });

  it('should merge custom classes', () => {
    fixture.componentRef.setInput('class', 'custom-label-class');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('custom-label-class');
  });

  it('should project content', () => {
    const compiled = fixture.nativeElement;
    const content = document.createTextNode('Label text');
    compiled.appendChild(content);
    expect(compiled.textContent).toContain('Label text');
  });
});

describe('B3FormMessageComponent', () => {
  let component: B3FormMessageComponent;
  let fixture: ComponentFixture<B3FormMessageComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3FormMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3FormMessageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default message classes', () => {
    expect(nativeElement.className).toContain('text-sm');
    expect(nativeElement.className).toContain('text-muted-foreground');
  });

  it('should apply error type classes', () => {
    fixture.componentRef.setInput('zType', 'error');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('text-red-500');
    expect(nativeElement.className).not.toContain('text-muted-foreground');
  });

  it('should apply success type classes', () => {
    fixture.componentRef.setInput('zType', 'success');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('text-green-500');
    expect(nativeElement.className).not.toContain('text-muted-foreground');
  });

  it('should apply warning type classes', () => {
    fixture.componentRef.setInput('zType', 'warning');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('text-yellow-500');
    expect(nativeElement.className).not.toContain('text-muted-foreground');
  });

  it('should apply default type classes when type is default', () => {
    fixture.componentRef.setInput('zType', 'default');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('text-muted-foreground');
  });

  it('should merge custom classes', () => {
    fixture.componentRef.setInput('class', 'custom-message-class');
    fixture.detectChanges();
    expect(nativeElement.className).toContain('custom-message-class');
  });

  it('should project content', () => {
    const compiled = fixture.nativeElement;
    const content = document.createTextNode('Error message');
    compiled.appendChild(content);
    expect(compiled.textContent).toContain('Error message');
  });
});
