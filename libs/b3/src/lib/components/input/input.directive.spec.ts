import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { B3InputDirective } from './input.directive';

@Component({
  template: `<input b3-input />`,
  standalone: true,
  imports: [B3InputDirective],
})
class TestHostComponent {}

describe('InputComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let inputElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    inputElement = fixture.debugElement.query(By.directive(B3InputDirective));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(inputElement).toBeTruthy();
    expect(inputElement.injector.get(B3InputDirective)).toBeTruthy();
  });
});
