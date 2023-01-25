import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DisplayThemeComponent } from './display-theme/display-theme.component';






const routes: Routes = [

  {
   path:"addTheme",
   component:AddThemeComponent
  },
  {
    path:"addMenu",
    component:AddMenuComponent
  },
  {
    path:"displayThemes",
    component:DisplayThemeComponent
  },
  {
    path:'admin',
    component:AdminDashboardComponent
  }


=======
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerguardGuard } from './customerguard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';
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
    component:MainComponent
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
  }

>>>>>>> 1844be9596195eb4572a620ae75c591eb818aac9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
