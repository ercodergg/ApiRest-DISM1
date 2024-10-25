import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarTrabajosPage } from './gestionar-trabajos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarTrabajosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarTrabajosPageRoutingModule {}
