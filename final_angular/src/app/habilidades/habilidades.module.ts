import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiderazgoComponent } from './liderazgo/liderazgo.component';
import { PythonComponent } from './python/python.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BalancesComponent } from './balances/balances.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PostgresComponent } from './postgres/postgres.component';
import { InglesComponent } from './ingles/ingles.component';
import { ExcelComponent } from './excel/excel.component';
import { RubyComponent } from './ruby/ruby.component';



@NgModule({
  declarations: [
    LiderazgoComponent,
    PythonComponent,
    HtmlComponent,
    CssComponent,
    BalancesComponent,
    JavascriptComponent,
    PostgresComponent,
    InglesComponent,
    ExcelComponent,
    RubyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabilidadesModule { }
