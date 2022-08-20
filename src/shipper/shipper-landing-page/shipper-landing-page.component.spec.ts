import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperLandingPageComponent } from './shipper-landing-page.component';

describe('ShipperLandingPageComponent', () => {
  let component: ShipperLandingPageComponent;
  let fixture: ComponentFixture<ShipperLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
