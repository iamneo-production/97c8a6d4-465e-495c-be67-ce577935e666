import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { AddonComponent } from './addon/addon.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewreviewsComponent } from './viewreviews/viewreviews.component';
import { EditreviewsComponent } from './reviews/editreviews/editreviews.component';
import { DeletereviewsComponent } from './reviews/deletereviews/deletereviews.component';
import { AddthemeButtonComponent } from './addtheme-button/addtheme-button.component';
import { AddmenuButtonComponent } from './addmenu-button/addmenu-button.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';


@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
    AdminComponent, HomepageComponent, BookingComponent, ViewbookingComponent, AddonComponent, ReviewsComponent
    , HomepageComponent, ViewbookingComponent, 
    BookingComponent, AddthemeComponent, AddmenuComponent,
     AddonComponent,
     ViewreviewsComponent,
     EditreviewsComponent,
     DeletereviewsComponent
     AddthemeButtonComponent,
     AddmenuButtonComponent,
     ViewthemeComponent,
     DeletethemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule, RouterModule, HttpClientModule, BrowserAnimationsModule,
    NgbModule, ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

