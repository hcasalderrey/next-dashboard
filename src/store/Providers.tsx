"use client"

import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { setFavoritePokemons } from "./pokemons/pokemons"


interface Props {
    children: React.ReactNode
}
export const Providers = ({children}:Props) => {

    useEffect(() => {
        const localFavorites = localStorage.getItem('favorite-pokemons');
        // localFavorites ? JSON.parse(localFavorites) : {}

        store.dispatch(setFavoritePokemons(localFavorites ? JSON.parse(localFavorites) : {}))


    }, [])

  return (
    <Provider store={store}>
         {children}
    </Provider>
  )
}
