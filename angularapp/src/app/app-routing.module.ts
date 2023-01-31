import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AdminComponent } from './admin/admin.component';
import { AdminguardGuard } from './adminguard.guard';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerguardGuard } from './customerguard.guard';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';

const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
  ,
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'booking',
    component: BookingComponent, canActivate:[CustomerguardGuard]
  },
  {
    path: 'reviews',
    component: ReviewsComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'viewbooking',
    component: ViewbookingComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'home',
    component: HomepageComponent, canActivate:[CustomerguardGuard]
  },
  // {
  //   path:'reviews',
  //   component: ReviewsComponent, canActivate:[CustomerguardGuard]
  // },
  {
    path:'displayuser',
    component: AdminComponent, canActivate:[AdminguardGuard]
  },
  {
    path: 'edituser',
    component: EditUserComponent, canActivate:[AdminguardGuard]
  },
  {
    path: 'admin',
    component: AdminComponent, canActivate:[AdminguardGuard]
  },
  {
    path:'deleteuser',
    component: DeleteUserComponent, canActivate:[AdminguardGuard]
  },
  {
    path:'addtheme',
    component: AddthemeComponent, canActivate:[AdminguardGuard]
  },
  {
    path: 'addmenu',
    component: AddmenuComponent, canActivate:[AdminguardGuard]
  },
  {
    path: 'addon',
    component: AddonComponent, canActivate:[AdminguardGuard]
  },
  {
    path: 'edit-booking',
    component: EditBookingComponent, canActivate:[CustomerguardGuard]
  },
  {
    path: 'viewtheme',
    component: ViewthemeComponent
  },
  {
    path:'viewmenu',
    component:ViewmenuComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }