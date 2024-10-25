import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarFichajesPage } from './gestionar-fichajes.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarFichajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarFichajesPageRoutingModule {}
