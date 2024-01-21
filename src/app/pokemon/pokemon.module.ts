import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { InfoDetalladaComponent } from './info-detallada/info-detallada.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
  declarations: [
    InfoDetalladaComponent,
    ColorPipe,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    RouterLinkActive,
    RouterLink
  ],
  exports: [
    InfoDetalladaComponent,
  ],
})
export class PokemonModule { }
