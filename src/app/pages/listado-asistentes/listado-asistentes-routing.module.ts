import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAsistentesPage } from './listado-asistentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAsistentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAsistentesPageRoutingModule {}
