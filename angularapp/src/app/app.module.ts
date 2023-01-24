import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { SearchComponent } from './auth/search/search.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    DisplayUserComponent,
    SearchComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

