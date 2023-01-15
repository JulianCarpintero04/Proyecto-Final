import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortfolioService } from './servicio/portfolio.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicio/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HabilidadesComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PortfolioService,
    { provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
