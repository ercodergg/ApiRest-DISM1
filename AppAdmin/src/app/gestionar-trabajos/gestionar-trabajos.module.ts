import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarTrabajosPageRoutingModule } from './gestionar-trabajos-routing.module';

import { GestionarTrabajosPage } from './gestionar-trabajos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarTrabajosPageRoutingModule
  ],
  declarations: [GestionarTrabajosPage]
})
export class GestionarTrabajosPageModule {}
