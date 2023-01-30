import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteviewsComponent } from './deleteviews.component';

describe('DeleteviewsComponent', () => {
  let component: DeleteviewsComponent;
  let fixture: ComponentFixture<DeleteviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
