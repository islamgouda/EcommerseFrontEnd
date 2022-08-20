import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProductsComponent } from './pending-products.component';

describe('PendingProductsComponent', () => {
  let component: PendingProductsComponent;
  let fixture: ComponentFixture<PendingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
