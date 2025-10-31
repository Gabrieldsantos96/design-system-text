import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3LoaderComponent } from './loader.component';

describe('B3LoaderComponent', () => {
  let component: B3LoaderComponent;
  let fixture: ComponentFixture<B3LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
