import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaeventoPage } from './creaevento.page';

const routes: Routes = [
  {
    path: '',
    component: CreaeventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaeventoPageRoutingModule {}
