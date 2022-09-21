import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BarraModule { }
