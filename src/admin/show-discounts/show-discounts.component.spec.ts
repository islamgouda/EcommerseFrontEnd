import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDiscountsComponent } from './show-discounts.component';

describe('ShowDiscountsComponent', () => {
  let component: ShowDiscountsComponent;
  let fixture: ComponentFixture<ShowDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
