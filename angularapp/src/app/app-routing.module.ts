import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddmenuButtonComponent } from './addmenu-button/addmenu-button.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
import { AddthemeButtonComponent } from './addtheme-button/addtheme-button.component';
import { AddthemeComponent } from './addtheme/addtheme.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerguardGuard } from './customerguard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';

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
    path: '',
    component:LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'booking',
    component: BookingComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'viewbooking',
    component: ViewbookingComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'home',
    component: HomepageComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'reviews',
    component: ReviewsComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'about',
    component: AboutComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'contact',
    component: ContactComponent, canActivate:[CustomerguardGuard]
  },
  {
    path:'displayuser',
    component: DisplayUserComponent
  },
  {
    path: 'edituser',
    component: EditUserComponent
  },
  {
    path:'deleteuser',
    component: DeleteUserComponent
  },
  {
    path:'addtheme',
    component: AddthemeComponent
  },
  {
    path: 'addmenu',
    component: AddmenuComponent
  },
  {
    path: 'addon',
    component: AddonComponent
  },
  {
    path:'modal',
    component:AddthemeButtonComponent
  },
  {
    path:'modal2',
    component:AddmenuButtonComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
