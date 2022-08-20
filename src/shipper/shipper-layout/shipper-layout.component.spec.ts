import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperLayoutComponent } from './shipper-layout.component';

describe('ShipperLayoutComponent', () => {
  let component: ShipperLayoutComponent;
  let fixture: ComponentFixture<ShipperLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
