import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddonbuttonComponent } from './view-addonbutton.component';

describe('ViewAddonbuttonComponent', () => {
  let component: ViewAddonbuttonComponent;
  let fixture: ComponentFixture<ViewAddonbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddonbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddonbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
