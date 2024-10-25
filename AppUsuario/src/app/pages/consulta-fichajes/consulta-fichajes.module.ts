import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { IonicModule } from '@ionic/angular';

import { ConsultaFichajesPageRoutingModule } from './consulta-fichajes-routing.module';

import { ConsultaFichajesPage } from './consulta-fichajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, // Añadir HttpClientModule aquí
    ConsultaFichajesPageRoutingModule
  ],
  declarations: [ConsultaFichajesPage]
})
export class ConsultaFichajesPageModule {}