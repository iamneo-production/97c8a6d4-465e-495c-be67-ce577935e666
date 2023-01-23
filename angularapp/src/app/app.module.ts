import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserDisplayComponent } from './user-display/user-display.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3d357351bf7abfb36a661702019fbff6d56da5bb
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { SearchComponent } from './auth/search/search.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';
import { DeleteUserComponent } from './auth/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SignupComponent,
    UserDisplayComponent
=======
    AuthComponent,
    SignupComponent,
    LoginComponent,
    DisplayUserComponent,
    SearchComponent,
    EditUserComponent,
    DeleteUserComponent,
>>>>>>> 3d357351bf7abfb36a661702019fbff6d56da5bb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
