import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByPriceComponent } from './products-by-price.component';

describe('ProductsByPriceComponent', () => {
  let component: ProductsByPriceComponent;
  let fixture: ComponentFixture<ProductsByPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
