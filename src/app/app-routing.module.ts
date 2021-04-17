import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoPageModule)
  },
  {
    path: 'saludo',
    loadChildren: () => import('./saludo/saludo.module').then( m => m.SaludoPageModule)
  },
  {
    path: 'operaciones-mat',
    loadChildren: () => import('./operaciones-mat/operaciones-mat.module').then( m => m.OperacionesMatPageModule)
  },
  {
    path: 'parcial',
    loadChildren: () => import('./parcial/parcial.module').then( m => m.ParcialPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'taller',
    loadChildren: () => import('./taller/taller.module').then( m => m.TallerPageModule)
  },
  {
    path: 'finanzas',
    loadChildren: () => import('./finanzas/finanzas.module').then( m => m.FinanzasPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
