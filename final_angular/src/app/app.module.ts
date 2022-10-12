import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginItemComponent } from './components/login-item/login-item.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercamioComponent } from './components/acercamio/acercamio.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortfolioService } from './servicio/portfolio.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HabilidadesComponent,
    ContactoComponent,
    LoginItemComponent,
    EncabezadoComponent,
    AcercamioComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
