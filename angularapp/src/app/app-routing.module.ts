import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
