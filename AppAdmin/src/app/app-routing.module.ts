import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) // Redirige al módulo de tabs
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gestionar-trabajos',
    loadChildren: () => import('./gestionar-trabajos/gestionar-trabajos.module').then(m => m.GestionarTrabajosPageModule) // Nueva página de gestionar trabajos
  },
  {
    path: 'gestionar-fichajes',
    loadChildren: () => import('./gestionar-fichajes/gestionar-fichajes.module').then(m => m.GestionarFichajesPageModule) // Nueva página de gestionar fichajes
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
