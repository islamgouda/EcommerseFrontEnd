import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBySubCategoryComponent } from './products-by-sub-category.component';

describe('ProductsBySubCategoryComponent', () => {
  let component: ProductsBySubCategoryComponent;
  let fixture: ComponentFixture<ProductsBySubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBySubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBySubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
