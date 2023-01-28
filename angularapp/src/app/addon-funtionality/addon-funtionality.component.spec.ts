import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonFuntionalityComponent } from './addon-funtionality.component';

describe('AddonFuntionalityComponent', () => {
  let component: AddonFuntionalityComponent;
  let fixture: ComponentFixture<AddonFuntionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonFuntionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonFuntionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
