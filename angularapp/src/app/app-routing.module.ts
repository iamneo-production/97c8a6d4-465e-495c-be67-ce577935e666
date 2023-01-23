import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddThemesComponent } from './add-themes/add-themes.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Routes = [

  {
    path:"login",
    component:LoginComponent
  },
  {
   path:"addTheme",
   component:AddThemesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
