import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { AddonComponent } from './addon/addon.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { AboutComponent } from './about/about.component';
import { TimerComponent } from './timer/timer.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DeleteAddonComponent } from './delete-addon/delete-addon.component';
import { EditAddonComponent } from './edit-addon/edit-addon.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';

@NgModule({
  declarations: [
    AppComponent, SignupComponent,LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
    AdminComponent, HomepageComponent, BookingComponent, ViewbookingComponent, AddonComponent, ReviewsComponent
    , HomepageComponent, ViewbookingComponent, 
    AdminComponent, ViewbookingComponent, 
    BookingComponent, AddthemeComponent, AddmenuComponent,
     AddonComponent,
     ViewreviewsComponent,
     EditreviewsComponent,
     DeletereviewsComponent,
    AddthemeButtonComponent,
     AddmenuButtonComponent,HomepageComponent,
     ViewthemeComponent,ViewmenuComponent,
     DeletethemeComponent,
     DeletemenuComponent,
     AboutComponent,
     TimerComponent,
  
    AdminComponent, ViewbookingComponent, EditUserComponent,
    BookingComponent, AddmenuComponent,AddonComponent,
    HomepageComponent,ViewmenuComponent,DeletethemeComponent,
    ViewthemeComponent,DeletemenuComponent, ReviewsComponent, 
    EditThemeComponent, EditMenuComponent,AddthemeComponent, 
    DeleteAddonComponent, EditAddonComponent, EditBookingComponent, DeleteBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule, RouterModule, HttpClientModule, BrowserAnimationsModule,
    NgbModule, ReactiveFormsModule,
    NgbModule, ReactiveFormsModule, FormsModule,
    RouterModule,
    HttpClientModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 