import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPendingProductsComponent } from './show-pending-products.component';

describe('ShowPendingProductsComponent', () => {
  let component: ShowPendingProductsComponent;
  let fixture: ComponentFixture<ShowPendingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPendingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
