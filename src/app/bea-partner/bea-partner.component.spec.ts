import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaPartnerComponent } from './bea-partner.component';

describe('BeaPartnerComponent', () => {
  let component: BeaPartnerComponent;
  let fixture: ComponentFixture<BeaPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeaPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
