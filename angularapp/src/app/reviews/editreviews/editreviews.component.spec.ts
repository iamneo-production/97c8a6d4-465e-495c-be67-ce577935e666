import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreviewsComponent } from './editreviews.component';

describe('EditreviewsComponent', () => {
  let component: EditreviewsComponent;
  let fixture: ComponentFixture<EditreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
