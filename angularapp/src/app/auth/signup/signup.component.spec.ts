import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

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