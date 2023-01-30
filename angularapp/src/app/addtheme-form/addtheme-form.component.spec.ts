import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthemeFormComponent } from './addtheme-form.component';

describe('AddthemeFormComponent', () => {
  let component: AddthemeFormComponent;
  let fixture: ComponentFixture<AddthemeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddthemeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddthemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
