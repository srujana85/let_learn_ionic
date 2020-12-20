import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwowayPage } from './twoway.page';

const routes: Routes = [
  {
    path: '',
    component: TwowayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwowayPageRoutingModule {}
