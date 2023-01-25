import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';

import { LoginComponent } from './auth/login/login.component';
=======
import { MainComponent } from './main/main.component';
import { SignupComponent } from './auth/signup/signup.component';
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
<<<<<<< HEAD
import { AddThemeComponent } from './add-theme/add-theme.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { DisplayThemeComponent } from './display-theme/display-theme.component';
import { AdminComponent } from './admin/admin.component';




=======
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    AuthComponent,
    LoginComponent,
    DisplayUserComponent,
    SearchComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddThemeComponent,
    AddMenuComponent,
    DisplayThemeComponent,
    AdminComponent
  
   
=======
    AppComponent, SignupComponent, LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
    AdminComponent, HomepageComponent, BookingComponent, ViewbookingComponent
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  
   
 
=======
    NgbModule, ReactiveFormsModule, RouterModule, HttpClientModule
>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

