import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaShipperComponent } from './bea-shipper.component';

describe('BeaShipperComponent', () => {
  let component: BeaShipperComponent;
  let fixture: ComponentFixture<BeaShipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaShipperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeaShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
