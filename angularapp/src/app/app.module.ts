import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
import { ReviewsComponent } from './reviews/reviews.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { EditAddonComponent } from './edit-addon/edit-addon.component';
import { DeleteAddonComponent } from './delete-addon/delete-addon.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerheaderComponent } from './customerheader/customerheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import { EditMenuComponent } from './edit-menu/edit-menu.component';


@NgModule({
  declarations: [
    AppComponent,SignupComponent,LoginComponent, MainComponent,
    DisplayUserComponent, DeleteUserComponent, 
    AdminComponent, ViewbookingComponent, EditUserComponent,
    BookingComponent, AddmenuComponent,AddonComponent,
   HomepageComponent,ViewmenuComponent,DeletethemeComponent,
    ViewthemeComponent,DeletemenuComponent, ReviewsComponent, 
    AddthemeComponent, DeleteAddonComponent, EditAddonComponent, EditBookingComponent, FooterComponent,
    CustomerheaderComponent, AdminheaderComponent, EditThemeComponent,DeleteBookingComponent, EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, FormsModule,RouterModule, NgbModule,BrowserAnimationsModule,
     HttpClientModule,MatSnackBarModule,MatTableModule,  MatFormFieldModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
