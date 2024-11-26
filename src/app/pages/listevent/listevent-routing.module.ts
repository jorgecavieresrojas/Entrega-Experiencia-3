import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeventPage } from './listevent.page';

const routes: Routes = [
  {
    path: '',
    component: ListeventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeventPageRoutingModule {}
