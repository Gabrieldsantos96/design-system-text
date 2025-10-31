import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3IconComponent } from './icon.component';

@Component({
  standalone: true,
  imports: [B3IconComponent],
  template: `<b3-icon [zType]="iconType" [zSize]="size" />`,
})
class TestHostComponent {
  iconType: 'house' | 'chevron-down' = 'house';
  size: 'sm' | 'default' | 'lg' | 'xl' = 'default';
}

describe('B3IconComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3IconComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon with default size', () => {
    const iconElement = fixture.nativeElement.querySelector('b3-icon lucide-angular svg');
    expect(iconElement).toBeTruthy();
    expect(iconElement.classList.contains('size-3.5')).toBe(true);
  });

  it('should apply custom size classes', () => {
    component.size = 'lg';
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('b3-icon lucide-angular svg');
    expect(iconElement.classList.contains('size-4')).toBe(true);
  });

  it('should render lucide-angular component', () => {
    const lucideIcon = fixture.nativeElement.querySelector('lucide-angular');
    expect(lucideIcon).toBeTruthy();
  });

  it('should change icon type', () => {
    component.iconType = 'chevron-down';
    fixture.detectChanges();
    expect(component.iconType).toBe('chevron-down');
  });
});
