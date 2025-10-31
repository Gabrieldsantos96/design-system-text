import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3DividerComponent } from './divider.component';

describe('B3DividerComponent', () => {
  let component: B3DividerComponent;
  let fixture: ComponentFixture<B3DividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3DividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3DividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render horizontal by default', () => {
    const dividerElement = fixture.nativeElement;
    expect(dividerElement.getAttribute('aria-orientation')).toBe('horizontal');
  });

  it('should render vertical when set', () => {
    fixture.componentRef.setInput('zOrientation', 'vertical');
    fixture.detectChanges();

    const dividerElement = fixture.nativeElement;
    expect(dividerElement.getAttribute('aria-orientation')).toBe('vertical');
  });
});
