import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { PokemonsResponse } from '../../pokemon/interfaces/pokemons-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

  pokemonResponse: PokemonsResponse | undefined;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe((pokemonResponse: PokemonsResponse) => {
        this.pokemonResponse = pokemonResponse;
      });
  }

  getPokemons(): string[] {
    return this.pokemonResponse?.results.map(({name}) => name) || [];
  }

  parseString(any:any): string {
    return String(any);
  }

}
