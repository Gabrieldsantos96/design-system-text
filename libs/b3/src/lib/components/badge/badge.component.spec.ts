import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: B3BadgeComponent;
  let fixture: ComponentFixture<B3BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
