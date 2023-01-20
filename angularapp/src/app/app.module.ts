import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { AddThemesComponent } from './add-themes/add-themes.component';
import { ThemeserviceService} from '../app/services/themeservice.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AddThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ThemeserviceService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

