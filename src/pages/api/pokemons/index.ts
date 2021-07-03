import pokeApi from 'axios-helper'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PokemonData } from 'types/pokemons'

export default async function getPokemons(req: NextApiRequest, res: NextApiResponse<PokemonData[]>) {
  try {
    const { offset = 10, limit = 10 } = req.query
    const data = await pokeApi.get<PokemonData[]>(`/pokemon?offset=${offset}&limit=${limit}`)
    res.status(200).json(data.data)
  } catch (error) {
    res.status(500)
  }
}
