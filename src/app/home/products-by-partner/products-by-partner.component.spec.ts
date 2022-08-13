import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByPartnerComponent } from './products-by-partner.component';

describe('ProductsByPartnerComponent', () => {
  let component: ProductsByPartnerComponent;
  let fixture: ComponentFixture<ProductsByPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
