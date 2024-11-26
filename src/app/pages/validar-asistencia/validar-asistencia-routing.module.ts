import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarAsistenciaPage } from './validar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarAsistenciaPageRoutingModule {}
