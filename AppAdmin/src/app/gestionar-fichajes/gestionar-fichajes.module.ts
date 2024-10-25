import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarFichajesPageRoutingModule } from './gestionar-fichajes-routing.module';

import { GestionarFichajesPage } from './gestionar-fichajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarFichajesPageRoutingModule
  ],
  declarations: [GestionarFichajesPage]
})
export class GestionarFichajesPageModule {}
