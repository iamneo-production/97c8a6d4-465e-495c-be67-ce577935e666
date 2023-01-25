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
<<<<<<< HEAD
import { AddThemeComponent } from './add-theme/add-theme.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
=======
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
>>>>>>> e8e8b1629fa6321b10e9ec6ddebb12e1b54fb536


@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
<<<<<<< HEAD
    AdminComponent, HomepageComponent, BookingComponent, ViewbookingComponent,AddThemeComponent,AddMenuComponent
=======
    AdminComponent, HomepageComponent, ViewbookingComponent, 
    BookingComponent, AddthemeComponent, AddmenuComponent,
     AddonComponent
>>>>>>> e8e8b1629fa6321b10e9ec6ddebb12e1b54fb536
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

