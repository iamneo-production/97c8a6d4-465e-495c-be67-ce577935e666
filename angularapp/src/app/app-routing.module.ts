import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddThemeComponent } from './add-theme/add-theme.component';




const routes: Routes = [

  {
   path:"addTheme",
   component:AddThemeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
