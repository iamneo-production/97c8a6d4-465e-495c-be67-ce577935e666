import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { DisplayThemeComponent } from './display-theme/display-theme.component';
=======
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddonComponent } from './addon/addon.component';
import { AddthemeComponent } from './addtheme/addtheme.component';
>>>>>>> e8e8b1629fa6321b10e9ec6ddebb12e1b54fb536
import { AdminComponent } from './admin/admin.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
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
  },
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> e8e8b1629fa6321b10e9ec6ddebb12e1b54fb536
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
