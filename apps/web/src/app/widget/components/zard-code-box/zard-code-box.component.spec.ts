import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3CodeBoxComponent } from './zard-code-box.component';

describe('B3CodeBoxComponent', () => {
  let component: B3CodeBoxComponent;
  let fixture: ComponentFixture<B3CodeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B3CodeBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B3CodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
