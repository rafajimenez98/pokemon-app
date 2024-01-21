import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLoadGuard } from './pokemon/guards/semana.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule),
    canLoad: [PokemonLoadGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'pokemon',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
