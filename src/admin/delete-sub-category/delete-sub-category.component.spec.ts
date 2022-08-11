import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubCategoryComponent } from './delete-sub-category.component';

describe('DeleteSubCategoryComponent', () => {
  let component: DeleteSubCategoryComponent;
  let fixture: ComponentFixture<DeleteSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
