import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRolefromUserComponent } from './remove-rolefrom-user.component';

describe('RemoveRolefromUserComponent', () => {
  let component: RemoveRolefromUserComponent;
  let fixture: ComponentFixture<RemoveRolefromUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRolefromUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveRolefromUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
