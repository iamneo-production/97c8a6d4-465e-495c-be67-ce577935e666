import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddonComponent } from './delete-addon.component';

describe('DeleteAddonComponent', () => {
  let component: DeleteAddonComponent;
  let fixture: ComponentFixture<DeleteAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
