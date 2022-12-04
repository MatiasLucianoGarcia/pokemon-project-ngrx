import { createAction,props } from "@ngrx/store";

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');

export const loadedPokemons = createAction('[Pokemon List] Loaded Success',props<{pokemons:Pokemon[]}>());