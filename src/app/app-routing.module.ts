import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'creaevento',
    loadChildren: () =>
      import('./pages/creaevento/creaevento.module').then((m) => m.CreaeventoPageModule),
  },
  {
    path: 'listevent',
    loadChildren: () =>
      import('./pages/listevent/listevent.module').then((m) => m.ListeventPageModule),
  },
  
  { path: 'editaeliminaevento/:id', loadChildren: () => import('./pages/editaeliminaevento/editaeliminaevento.module').then(m => m.EditaeliminaeventoPageModule) },
  {
    path: 'qrscanner',
    loadChildren: () => import('./qrscanner/qrscanner.module').then( m => m.QrscannerPageModule)
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module').then((m) => m.RegistroPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./pages/perfil/perfil.module').then((m) => m.PerfilPageModule),
  },
  {
    path: 'qrscanner',
    loadChildren: () =>
      import('./qrscanner/qrscanner.module').then((m) => m.QrscannerPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
