import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './usuario/registro/registro.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './usuario/login/login.component';
import { NuevaNotaComponent } from './notas/nueva-nota/nueva-nota.component';
import { NotasComponent } from './notas/notas/notas.component';



const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'nueva-nota', component: NuevaNotaComponent },
  { path: 'notas', component: NotasComponent },
  { path: '', component: MainComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class Route { }
