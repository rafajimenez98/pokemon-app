import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonLoadGuard } from '../guards/semana.guard';

@Component({
  selector: 'app-info-detallada',
  templateUrl: './info-detallada.component.html'
})
export class InfoDetalladaComponent  implements OnInit{

    pokemon: Pokemon | undefined;

    constructor(
      private pokemonLoadGuard: PokemonLoadGuard,
      private pokemonService: PokemonService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(({id}) => {
          this.pokemonService.getPokemon(id)
          .subscribe((pokemon: Pokemon) => {
            if (!pokemon) {
              this.router.navigateByUrl('error');
              return;
            }
            this.pokemon = pokemon;
          });
        });
    }

    getTypes(): string {
      return this.pokemon?.types.map(({type}) => type.name).join(', ') || '';
    }

    getAbilities(): string {
      return this.pokemon?.abilities.map(({ability}) => ability.name).join(', ') || '';
    }



}
