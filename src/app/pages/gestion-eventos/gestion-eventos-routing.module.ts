import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEventosPage } from './gestion-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEventosPageRoutingModule {}
