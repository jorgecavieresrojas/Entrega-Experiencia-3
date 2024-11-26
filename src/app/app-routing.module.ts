import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',  // Cambiado de 'register' a 'registro'
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./pages/olvido/olvido.module').then(m => m.OlvidoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'gestion-eventos',
    loadChildren: () => import('./pages/gestion-eventos/gestion-eventos.module').then( m => m.GestionEventosPageModule)
  },
  {
    path: 'validar-asistencia',
    loadChildren: () => import('./pages/validar-asistencia/validar-asistencia.module').then( m => m.ValidarAsistenciaPageModule)
  },
  {
    path: 'listado-asistentes',
    loadChildren: () => import('./pages/listado-asistentes/listado-asistentes.module').then( m => m.ListadoAsistentesPageModule)
  },
  {
    path: 'creaevento',
    loadChildren: () => import('./pages/creaevento/creaevento.module').then( m => m.CreaeventoPageModule)
  },
  {
    path: 'editaeliminaevento',
    loadChildren: () => import('./pages/editaeliminaevento/editaeliminaevento.module').then( m => m.EditaeliminaeventoPageModule)
  },
  {
    path: 'listevent',
    loadChildren: () => import('./pages/listevent/listevent.module').then( m => m.ListeventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
