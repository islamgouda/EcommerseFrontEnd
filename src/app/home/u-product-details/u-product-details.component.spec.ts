import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UProductDetailsComponent } from './u-product-details.component';

describe('UProductDetailsComponent', () => {
  let component: UProductDetailsComponent;
  let fixture: ComponentFixture<UProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
