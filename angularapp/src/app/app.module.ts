import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { SearchComponent } from './auth/search/search.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
=======
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DisplaythemeComponent } from './displaytheme/displaytheme.component';
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AuthComponent,
    SignupComponent,
    LoginComponent,
    DisplayUserComponent,
    SearchComponent,
    EditUserComponent,
    DeleteUserComponent,
=======
    LoginComponent,
    DisplaythemeComponent
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
=======
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> a88c45381ebb764c39c26e32c06b6789d4c81c1c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
