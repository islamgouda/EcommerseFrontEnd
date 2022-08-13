import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByProductNameComponent } from './products-by-product-name.component';

describe('ProductsByProductNameComponent', () => {
  let component: ProductsByProductNameComponent;
  let fixture: ComponentFixture<ProductsByProductNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByProductNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
