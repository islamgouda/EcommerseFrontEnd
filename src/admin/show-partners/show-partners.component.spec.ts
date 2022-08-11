import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartnersComponent } from './show-partners.component';

describe('ShowPartnersComponent', () => {
  let component: ShowPartnersComponent;
  let fixture: ComponentFixture<ShowPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
