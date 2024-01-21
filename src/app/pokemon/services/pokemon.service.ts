import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable, catchError } from 'rxjs';
import { PokemonsResponse } from '../interfaces/pokemons-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonsResponse> {
    return this.http.get<PokemonsResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .pipe(
      catchError((err) => {
        console.log(err);
        return this.getPokemon('1');
      })
    );
  }
}
