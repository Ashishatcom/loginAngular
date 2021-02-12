import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EcomerceMaterialModule } from './MaterialModule/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserRegistrationService } from './shared/user-registration.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RoutegaurdGuard } from "./shared/auth/routegaurd.guard";

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcomerceMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,
    // useClass:AuthInterceptor},
    UserRegistrationService,RoutegaurdGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
