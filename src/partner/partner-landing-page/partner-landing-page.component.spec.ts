import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLandingPageComponent } from './partner-landing-page.component';

describe('PartnerLandingPageComponent', () => {
  let component: PartnerLandingPageComponent;
  let fixture: ComponentFixture<PartnerLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
