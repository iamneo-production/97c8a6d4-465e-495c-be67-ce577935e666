import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
=======
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 57ae5e47aeacd1773d31c639dd6a73a869b9f4d1
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
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatIconModule} from '@angular/material/icon';
import { DeleteviewsComponent } from './deleteviews/deleteviews.component';
import { DeleteaddonComponent } from './deleteaddon/deleteaddon.component';
import { EditmenuComponent } from './editmenu/editmenu.component';



=======
import { ReviewsComponent } from './reviews/reviews.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DeleteAddonComponent } from './delete-addon/delete-addon.component';
import { EditAddonComponent } from './edit-addon/edit-addon.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
>>>>>>> 57ae5e47aeacd1773d31c639dd6a73a869b9f4d1

@NgModule({
  declarations: [
    AppComponent, SignupComponent,LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
<<<<<<< HEAD
    AdminComponent, ViewbookingComponent, 
    BookingComponent, AddthemeComponent, AddmenuComponent,
     AddonComponent,
     AddthemeButtonComponent,
     AddmenuButtonComponent,HomepageComponent,
     ViewthemeComponent,ViewmenuComponent,
     DeletethemeComponent,
     DeletemenuComponent,
     DeleteviewsComponent,
     DeleteaddonComponent,
     EditmenuComponent,
  
     
     
=======
    AdminComponent, ViewbookingComponent, EditUserComponent,
    BookingComponent, AddmenuComponent,AddonComponent,
    HomepageComponent,ViewmenuComponent,DeletethemeComponent,
    ViewthemeComponent,DeletemenuComponent, ReviewsComponent, 
    EditThemeComponent, EditMenuComponent,AddthemeComponent, 
    DeleteAddonComponent, EditAddonComponent, EditBookingComponent, DeleteBookingComponent
>>>>>>> 57ae5e47aeacd1773d31c639dd6a73a869b9f4d1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule, FormsModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

