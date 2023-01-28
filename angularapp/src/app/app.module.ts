import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbRatingModule  } from '@ng-bootstrap/ng-bootstrap';
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
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
import { AddthemeButtonComponent } from './addtheme-button/addtheme-button.component';
import { AddmenuButtonComponent } from './addmenu-button/addmenu-button.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent, SignupComponent,LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
    AdminComponent, ViewbookingComponent, EditUserComponent,
    BookingComponent, AddthemeComponent, AddmenuComponent,
     AddonComponent,
     AddthemeButtonComponent,
     AddmenuButtonComponent,HomepageComponent,
     ViewthemeComponent,ViewmenuComponent,
     DeletethemeComponent,
     DeletemenuComponent, ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

