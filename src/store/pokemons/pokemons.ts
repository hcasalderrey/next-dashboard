import { SimplePockemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

/*
{
    '1': { id: 1, name: 'bulbasaur' },
    '2': { id: 2, name: 'ivysaur' },
    '3': { id: 3, name: 'venusaur' }
}
*/

interface PokemonsState {
    favorites: { [key: string]: SimplePockemon },

}
//const getInitialState = ():PokemonsState =>{

//    //if(typeof localStorage === 'undefined') return {}

//    const localFavorites = localStorage.getItem('favorite-pokemons');
//    return localFavorites ? JSON.parse(localFavorites) : {}

//}
const initialState: PokemonsState = {
    favorites: {},


    //...getInitialState(),

    //'1':{ id: '1', name: 'bulbasaur' }, 
    // '3': { id: '3', name: 'venusaur' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<SimplePockemon[]>) {

        //state.favorites = action.payload;

        const pokemons: SimplePockemon[] = action.payload;
        //console.log(pokemons)
        pokemons.map(pokemon => state.favorites[pokemon.id] = pokemon)
        //pokemons.forEach( pokemon => {
        //    state.favorites[pokemon.id] = pokemon
        //})

    },

    toogleFavorite(state, action: PayloadAction<SimplePockemon>) {
        const pokemon = action.payload;
         const { id } = pokemon;

        if ( !!state.favorites[id] ) {
            delete state.favorites[id];
            // return;
        } else {
            state.favorites[id] = pokemon;
        }
        /////TODO: No se debe hacer
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
    }
});

export const {toogleFavorite,setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer