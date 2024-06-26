export interface PokemonGeneration {
  id: number
  main_region: ApiLink
  moves?: ApiLink[]
  name: string
  names?: Name[]
  pokemon_species: ApiLink[]
  types?: ApiLink[]
  version_groups?: ApiLink[]
}

export interface Name {
  language: ApiLink
  name: string
}

export interface ApiLink {
  name: string
  url: string
}

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface Pokemon {
  name: string
  id: number
  sprites: {
    front_default: string
    back_default: string
  }
  abilities: Array<Ability>
  moves: Array<Move>
  types: Array<TypeInfo>
  results: Result[]
  stats: Stat[]
  height: number
  weight: number
  held_items: Array<{ item: { name: string; url: string } }>
}

interface Ability {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

interface Move {
  move: { name: string; url: string }
}

interface TypeInfo {
  slot: number
  type: { name: string; url: string }
}

export interface SearchResults {
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export interface PokemonHabitat {
  id: number
  count: number
  next: null
  previous: null
  results: Result[]
}
