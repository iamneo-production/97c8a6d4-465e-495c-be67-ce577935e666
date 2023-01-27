import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenuButtonComponent } from './addmenu-button.component';

describe('AddmenuButtonComponent', () => {
  let component: AddmenuButtonComponent;
  let fixture: ComponentFixture<AddmenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
