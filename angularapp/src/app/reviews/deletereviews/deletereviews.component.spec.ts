import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereviewsComponent } from './deletereviews.component';

describe('DeletereviewsComponent', () => {
  let component: DeletereviewsComponent;
  let fixture: ComponentFixture<DeletereviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletereviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
