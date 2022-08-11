import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoriesComponent } from './show-categories.component';

describe('ShowCategoriesComponent', () => {
  let component: ShowCategoriesComponent;
  let fixture: ComponentFixture<ShowCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
