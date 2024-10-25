import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page'; // Asegúrate de que esto esté correcto

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) // Gestión de Usuarios
      },
      {
        path: 'gestionar-trabajos',
        loadChildren: () => import('../gestionar-trabajos/gestionar-trabajos.module').then(m => m.GestionarTrabajosPageModule) // Nueva página para Gestionar Trabajos
      },
      {
        path: 'gestionar-fichajes',
        loadChildren: () => import('../gestionar-fichajes/gestionar-fichajes.module').then(m => m.GestionarFichajesPageModule) // Nueva página para Gestionar Fichajes
      },
      {
        path: '',
        redirectTo: 'home', // Redirigir a "home" si no se especifica otra ruta
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
