import { PokemonCard, SimplePockemon } from "@/app/pokemons"
import Image
 from "next/image"
 interface Props {
    pokemons:SimplePockemon[]
 }
export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gep-10 items-center justify-center">
    {
        pokemons.map((pokemon)=>(
       
        //<span key={pokemon.id}> asasadff </span>

            <PokemonCard key={pokemon.id} pokemon ={pokemon} />
        ))
    }
    
    </div> 
  )
}
