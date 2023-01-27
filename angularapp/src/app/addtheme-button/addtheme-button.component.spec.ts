import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthemeButtonComponent } from './addtheme-button.component';

describe('AddthemeButtonComponent', () => {
  let component: AddthemeButtonComponent;
  let fixture: ComponentFixture<AddthemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddthemeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddthemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
