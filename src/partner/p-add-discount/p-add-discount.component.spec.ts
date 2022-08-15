import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAddDiscountComponent } from './p-add-discount.component';

describe('PAddDiscountComponent', () => {
  let component: PAddDiscountComponent;
  let fixture: ComponentFixture<PAddDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAddDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAddDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
