import { PokemonGrid, PokemonsResponse, SimplePockemon } from "@/pokemons"

 
 export const metadata = {
  title: 'Favoritos',
  description: 'LISTADO de Favoritos',
 };

 
export default async function FavoritePage() { 

  return (
    <div className="flex flex-col p-2">
        <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-500">Global state</small> </span>
        <PokemonGrid pokemons={[]}/>
    </div>
  );
}