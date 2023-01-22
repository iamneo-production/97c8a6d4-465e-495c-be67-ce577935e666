import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaythemeComponent } from './displaytheme.component';

describe('DisplaythemeComponent', () => {
  let component: DisplaythemeComponent;
  let fixture: ComponentFixture<DisplaythemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaythemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaythemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
