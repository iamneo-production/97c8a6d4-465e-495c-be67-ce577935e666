import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonbuttonComponent } from './addonbutton.component';

describe('AddonbuttonComponent', () => {
  let component: AddonbuttonComponent;
  let fixture: ComponentFixture<AddonbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
