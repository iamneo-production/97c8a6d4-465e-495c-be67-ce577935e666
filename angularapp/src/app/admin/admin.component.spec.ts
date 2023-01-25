<<<<<<< HEAD
<<<<<<<< HEAD:angularapp/src/app/admin/admin.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
========
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  beforeEach(()=>TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[SignupComponent]
  }))
  beforeEach(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });
  it('FE_SignupTest', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9:angularapp/src/app/auth/signup/signup.component.spec.ts
=======
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
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
