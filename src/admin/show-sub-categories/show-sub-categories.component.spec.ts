import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubCategoriesComponent } from './show-sub-categories.component';

describe('ShowSubCategoriesComponent', () => {
  let component: ShowSubCategoriesComponent;
  let fixture: ComponentFixture<ShowSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
