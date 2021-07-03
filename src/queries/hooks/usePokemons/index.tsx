import axios from 'axios'
import { useQuery } from 'react-query'
import { PokemonData } from 'types/pokemons'

const fetchPokemons = async (limit = 10, offset = 10) => {
  return (await axios.get<PokemonData[]>(`/api/pokemons?offset=${offset}&limit=${limit}`)).data
}

const usePokemons = (limit: number, offset: number) => {
  return useQuery(['pokemons', limit, offset], async () => {
    try {
      const data = await fetchPokemons(limit, offset)
      return data
    } catch (error) {
      throw new Error('Something went wrong')
    }
  },
  {
    staleTime: Infinity
  })
}

export { usePokemons, fetchPokemons }
