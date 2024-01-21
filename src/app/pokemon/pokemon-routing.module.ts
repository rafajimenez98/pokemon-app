import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoDetalladaComponent } from './info-detallada/info-detallada.component';

const routes: Routes = [
  {
    path: ':id',
    component: InfoDetalladaComponent,
  },
  {
    path: '**',
    redirectTo: '1',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
