import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DisplaythemeComponent } from './displaytheme/displaytheme.component';
=======
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
>>>>>>> 3d357351bf7abfb36a661702019fbff6d56da5bb

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    DisplaythemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
=======
    AuthComponent,
    SignupComponent,
    LoginComponent,
    DisplayUserComponent,
    SearchComponent,
    EditUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, NgbModule
>>>>>>> 3d357351bf7abfb36a661702019fbff6d56da5bb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
