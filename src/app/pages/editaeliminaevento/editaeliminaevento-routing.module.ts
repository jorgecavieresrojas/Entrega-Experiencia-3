import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaeliminaeventoPage } from './editaeliminaevento.page';

const routes: Routes = [
  {
    path: '',
    component: EditaeliminaeventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaeliminaeventoPageRoutingModule {}
