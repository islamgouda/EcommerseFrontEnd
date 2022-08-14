import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDisountToProductComponent } from './assign-disount-to-product.component';

describe('AssignDisountToProductComponent', () => {
  let component: AssignDisountToProductComponent;
  let fixture: ComponentFixture<AssignDisountToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDisountToProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDisountToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
