import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAddProductComponent } from './p-add-product.component';

describe('PAddProductComponent', () => {
  let component: PAddProductComponent;
  let fixture: ComponentFixture<PAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
