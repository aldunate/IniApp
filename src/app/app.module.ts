import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { Route } from './app.route';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './usuario/login/login.component';
import { UsuarioService } from './usuario/service/usuario.service';
import { TokenInterceptor } from './usuario/service/token.interceptor';
import { AuthService } from './usuario/service/auth.service';
import { TokenService } from './usuario/service/token.service';
import { BackendInterceptor } from './util/service/mockBackend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, Route],
  providers: [UsuarioService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, TokenInterceptor, AuthService, TokenService, {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
  }, BackendInterceptor,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
