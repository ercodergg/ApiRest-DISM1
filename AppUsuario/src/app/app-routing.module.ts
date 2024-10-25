import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registrar-fichaje',
    loadChildren: () => import('./pages/registrar-fichaje/registrar-fichaje.module').then(m => m.RegistrarFichajePageModule)
  },
  {
    path: 'consulta-fichajes',
    loadChildren: () => import('./pages/consulta-fichajes/consulta-fichajes.module').then(m => m.ConsultaFichajesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
