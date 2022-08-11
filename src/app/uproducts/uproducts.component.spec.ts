import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UProductsComponent } from './uproducts.component';

describe('UProductsComponent', () => {
  let component: UProductsComponent;
  let fixture: ComponentFixture<UProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
