import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAddressComponent } from './add-user-address.component';

describe('AddUserAddressComponent', () => {
  let component: AddUserAddressComponent;
  let fixture: ComponentFixture<AddUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
