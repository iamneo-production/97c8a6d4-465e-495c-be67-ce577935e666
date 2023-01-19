import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminComponent } from './admin.component';

describe('AddproductComponent', () => {
  let component: AdminComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AdminComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });
  it('FE_AdminTest', () => {
    expect(component).toBeTruthy();
  });
});