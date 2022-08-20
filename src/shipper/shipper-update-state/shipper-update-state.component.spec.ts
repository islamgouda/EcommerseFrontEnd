import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperUpdateStateComponent } from './shipper-update-state.component';

describe('ShipperUpdateStateComponent', () => {
  let component: ShipperUpdateStateComponent;
  let fixture: ComponentFixture<ShipperUpdateStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperUpdateStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperUpdateStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
