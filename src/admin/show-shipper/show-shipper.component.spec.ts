import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShipperComponent } from './show-shipper.component';

describe('ShowShipperComponent', () => {
  let component: ShowShipperComponent;
  let fixture: ComponentFixture<ShowShipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShipperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
