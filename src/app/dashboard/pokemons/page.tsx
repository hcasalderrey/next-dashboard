import { PokemonGrid, PokemonsResponse, SimplePockemon } from "@/pokemons"

 
 export const metadata = {
  title: '151 Pokémon',
  description: '151 Pokémon LISTADO',
 };


const getPokemons = async( limit=20, offset=0): Promise<SimplePockemon[]> =>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    //const data:PokemonsResponse = await fetch(`https://dragonball-api.com/api/characters?limit=${limit}&offset=${offset}`)

    .then (res => res.json())

    const pokemons = data.results.map(pokemon=>({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    //throw new Error ('No se puede crear la pagina')

    return pokemons

}
export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col p-2">
        <span className="text-5xl my-2">Listado de Pokémons <small>estático</small> </span>
        <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}