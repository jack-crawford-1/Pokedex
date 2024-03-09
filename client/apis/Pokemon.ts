import request from 'superagent'
import type {
  Pokemon,
  PokemonGeneration,
  PokemonHabitat,
  Result,
} from '../../models/Pokemon.ts'

export async function fetchPokemonGeneration(generation: number) {
  const res = await request.get(
    `https://pokeapi.co/api/v2/generation/${generation}`
  )

  return res.body as PokemonGeneration
}

export async function fetchPokemonByName(name: string) {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body as Pokemon
}

export async function fetchPokemonByHabitat(name: string) {
  const res = await request.get(
    `https://pokeapi.co/api/v2/pokemon-habitat/${name}`
  )
  return res.body as PokemonHabitat
}

export async function fetchAllHabitats() {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon-habitat/`)
  return res.body.results as Result[]
}
