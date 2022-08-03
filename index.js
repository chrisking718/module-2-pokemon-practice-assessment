/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of pokemon.

  Keep in mind that your functions must still have and use a parameter for accepting all pokemon.
*/
const examplePokemon = require("./pokemon.js");
// Do not change the line above.
const pokemon = [
  {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 64,
    height: 7,
    pokeId: 1,
    name: "bulbasaur",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 69,
  },
  {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 142,
    height: 10,
    pokeId: 2,
    name: "ivysaur",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 130,
  },
  {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 263,
    height: 20,
    pokeId: 3,
    name: "venusaur",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 1000,
  },
  {
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 62,
    height: 6,
    pokeId: 4,
    name: "charmander",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    weight: 85,
  },
  {
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 142,
    height: 11,
    pokeId: 5,
    name: "charmeleon",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    weight: 190,
  },
  {
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 267,
    height: 17,
    pokeId: 6,
    name: "charizard",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 905,
  },
  {
    abilities: [
      {
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 63,
    height: 5,
    pokeId: 7,
    name: "squirtle",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    weight: 90,
  },
  {
    abilities: [
      {
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 142,
    height: 10,
    pokeId: 8,
    name: "wartortle",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    weight: 225,
  },
  {
    abilities: [
      {
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 265,
    height: 16,
    pokeId: 9,
    name: "blastoise",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    weight: 855,
  },
  {
    abilities: [
      {
        ability: {
          name: "shield-dust",
          url: "https://pokeapi.co/api/v2/ability/19/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "run-away",
          url: "https://pokeapi.co/api/v2/ability/50/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 39,
    height: 3,
    pokeId: 10,
    name: "caterpie",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
    ],
    weight: 29,
  },
  {
    abilities: [
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 72,
    height: 7,
    pokeId: 11,
    name: "metapod",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
    ],
    weight: 99,
  },
  {
    abilities: [
      {
        ability: {
          name: "compound-eyes",
          url: "https://pokeapi.co/api/v2/ability/14/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "tinted-lens",
          url: "https://pokeapi.co/api/v2/ability/110/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 198,
    height: 11,
    pokeId: 12,
    name: "butterfree",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 320,
  },
  {
    abilities: [
      {
        ability: {
          name: "shield-dust",
          url: "https://pokeapi.co/api/v2/ability/19/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "run-away",
          url: "https://pokeapi.co/api/v2/ability/50/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 39,
    height: 3,
    pokeId: 13,
    name: "weedle",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 32,
  },
  {
    abilities: [
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 72,
    height: 6,
    pokeId: 14,
    name: "kakuna",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 100,
  },
  {
    abilities: [
      {
        ability: {
          name: "swarm",
          url: "https://pokeapi.co/api/v2/ability/68/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "sniper",
          url: "https://pokeapi.co/api/v2/ability/97/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 178,
    height: 10,
    pokeId: 15,
    name: "beedrill",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 295,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "tangled-feet",
          url: "https://pokeapi.co/api/v2/ability/77/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "big-pecks",
          url: "https://pokeapi.co/api/v2/ability/145/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 50,
    height: 3,
    pokeId: 16,
    name: "pidgey",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 18,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "tangled-feet",
          url: "https://pokeapi.co/api/v2/ability/77/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "big-pecks",
          url: "https://pokeapi.co/api/v2/ability/145/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 122,
    height: 11,
    pokeId: 17,
    name: "pidgeotto",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 300,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "tangled-feet",
          url: "https://pokeapi.co/api/v2/ability/77/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "big-pecks",
          url: "https://pokeapi.co/api/v2/ability/145/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 216,
    height: 15,
    pokeId: 18,
    name: "pidgeot",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 395,
  },
  {
    abilities: [
      {
        ability: {
          name: "run-away",
          url: "https://pokeapi.co/api/v2/ability/50/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: { name: "guts", url: "https://pokeapi.co/api/v2/ability/62/" },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 51,
    height: 3,
    pokeId: 19,
    name: "rattata",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
    ],
    weight: 35,
  },
  {
    abilities: [
      {
        ability: {
          name: "run-away",
          url: "https://pokeapi.co/api/v2/ability/50/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: { name: "guts", url: "https://pokeapi.co/api/v2/ability/62/" },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 145,
    height: 7,
    pokeId: 20,
    name: "raticate",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
    ],
    weight: 185,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "sniper",
          url: "https://pokeapi.co/api/v2/ability/97/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 52,
    height: 3,
    pokeId: 21,
    name: "spearow",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 20,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "sniper",
          url: "https://pokeapi.co/api/v2/ability/97/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 155,
    height: 12,
    pokeId: 22,
    name: "fearow",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 380,
  },
  {
    abilities: [
      {
        ability: {
          name: "intimidate",
          url: "https://pokeapi.co/api/v2/ability/22/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "unnerve",
          url: "https://pokeapi.co/api/v2/ability/127/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 58,
    height: 20,
    pokeId: 23,
    name: "ekans",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 69,
  },
  {
    abilities: [
      {
        ability: {
          name: "intimidate",
          url: "https://pokeapi.co/api/v2/ability/22/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "unnerve",
          url: "https://pokeapi.co/api/v2/ability/127/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 157,
    height: 35,
    pokeId: 24,
    name: "arbok",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 650,
  },
  {
    abilities: [
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "lightning-rod",
          url: "https://pokeapi.co/api/v2/ability/31/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 112,
    height: 4,
    pokeId: 25,
    name: "pikachu",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      },
    ],
    weight: 60,
  },
  {
    abilities: [
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "lightning-rod",
          url: "https://pokeapi.co/api/v2/ability/31/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 243,
    height: 8,
    pokeId: 26,
    name: "raichu",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      },
    ],
    weight: 300,
  },
  {
    abilities: [
      {
        ability: {
          name: "sand-veil",
          url: "https://pokeapi.co/api/v2/ability/8/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "sand-rush",
          url: "https://pokeapi.co/api/v2/ability/146/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 60,
    height: 6,
    pokeId: 27,
    name: "sandshrew",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      },
    ],
    weight: 120,
  },
  {
    abilities: [
      {
        ability: {
          name: "sand-veil",
          url: "https://pokeapi.co/api/v2/ability/8/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "sand-rush",
          url: "https://pokeapi.co/api/v2/ability/146/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 158,
    height: 10,
    pokeId: 28,
    name: "sandslash",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      },
    ],
    weight: 295,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 55,
    height: 4,
    pokeId: 29,
    name: "nidoran-f",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 70,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 128,
    height: 8,
    pokeId: 30,
    name: "nidorina",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 200,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "sheer-force",
          url: "https://pokeapi.co/api/v2/ability/125/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 253,
    height: 13,
    pokeId: 31,
    name: "nidoqueen",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      },
    ],
    weight: 600,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 55,
    height: 5,
    pokeId: 32,
    name: "nidoran-m",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 90,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "hustle",
          url: "https://pokeapi.co/api/v2/ability/55/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 128,
    height: 9,
    pokeId: 33,
    name: "nidorino",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 195,
  },
  {
    abilities: [
      {
        ability: {
          name: "poison-point",
          url: "https://pokeapi.co/api/v2/ability/38/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rivalry",
          url: "https://pokeapi.co/api/v2/ability/79/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "sheer-force",
          url: "https://pokeapi.co/api/v2/ability/125/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 253,
    height: 14,
    pokeId: 34,
    name: "nidoking",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      },
    ],
    weight: 620,
  },
  {
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "magic-guard",
          url: "https://pokeapi.co/api/v2/ability/98/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "friend-guard",
          url: "https://pokeapi.co/api/v2/ability/132/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 113,
    height: 6,
    pokeId: 35,
    name: "clefairy",
    past_types: [
      {
        generation: {
          name: "generation-v",
          url: "https://pokeapi.co/api/v2/generation/5/",
        },
        types: [
          {
            slot: 1,
            type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
          },
        ],
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
    ],
    weight: 75,
  },
  {
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "magic-guard",
          url: "https://pokeapi.co/api/v2/ability/98/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "unaware",
          url: "https://pokeapi.co/api/v2/ability/109/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 242,
    height: 13,
    pokeId: 36,
    name: "clefable",
    past_types: [
      {
        generation: {
          name: "generation-v",
          url: "https://pokeapi.co/api/v2/generation/5/",
        },
        types: [
          {
            slot: 1,
            type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
          },
        ],
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
    ],
    weight: 400,
  },
  {
    abilities: [
      {
        ability: {
          name: "flash-fire",
          url: "https://pokeapi.co/api/v2/ability/18/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "drought",
          url: "https://pokeapi.co/api/v2/ability/70/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 60,
    height: 6,
    pokeId: 37,
    name: "vulpix",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    weight: 99,
  },
  {
    abilities: [
      {
        ability: {
          name: "flash-fire",
          url: "https://pokeapi.co/api/v2/ability/18/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "drought",
          url: "https://pokeapi.co/api/v2/ability/70/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 177,
    height: 11,
    pokeId: 38,
    name: "ninetales",
    past_types: [],
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    weight: 199,
  },
  {
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "competitive",
          url: "https://pokeapi.co/api/v2/ability/172/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "friend-guard",
          url: "https://pokeapi.co/api/v2/ability/132/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 95,
    height: 5,
    pokeId: 39,
    name: "jigglypuff",
    past_types: [
      {
        generation: {
          name: "generation-v",
          url: "https://pokeapi.co/api/v2/generation/5/",
        },
        types: [
          {
            slot: 1,
            type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
          },
        ],
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
    ],
    weight: 55,
  },
  {
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "competitive",
          url: "https://pokeapi.co/api/v2/ability/172/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "frisk",
          url: "https://pokeapi.co/api/v2/ability/119/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 218,
    height: 10,
    pokeId: 40,
    name: "wigglytuff",
    past_types: [
      {
        generation: {
          name: "generation-v",
          url: "https://pokeapi.co/api/v2/generation/5/",
        },
        types: [
          {
            slot: 1,
            type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
          },
        ],
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
    ],
    weight: 120,
  },
];


/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all of  the names from an array of pokemon. If the inputted `pokemon` array is of length 1, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are pokemon names.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'bulbasaur',  'ivysaur',    'venusaur',
  'charmander', 'charmeleon', 'charizard',
  'squirtle',   'wartortle',  'blastoise',
  'caterpie',   'metapod',    'butterfree',
  'weedle',     'kakuna',     'beedrill',
  'pidgey',     'pidgeotto',  'pidgeot',
  'rattata',    'raticate',   'spearow',
  'fearow',     'ekans',      'arbok',
  'pikachu',    'raichu',     'sandshrew',
  'sandslash',  'nidoran-f',  'nidorina',
  'nidoqueen',  'nidoran-m',  'nidorino',
  'nidoking',   'clefairy',   'clefable',
  'vulpix',     'ninetales',  'jigglypuff',
  'wigglytuff'
];
 */

function getAllPokemonNames(pokemon) {
  if (pokemon.length === 1){
    throw "Only 1 pokemon"
  }
  return poke = pokemon.map((pokemon)=> pokemon.name)
}

/**
 * checkIfAnyPokemonWeighsLessThan()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the pokemon weighs less than the provided weight.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} [weight= >18] - A weight. Defaults to a number higher than 18.
 * @returns {boolean} Returns `true` if a pokemon exists in the list that weighs less than the provided weight, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 60);
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 18);
 *  //> false
 */
function checkIfAnyPokemonWeighsLessThan(pokemon,weight) {
  if(!weight){
    weight = 19
  }
return body = pokemon.some((poke)=> poke.weight < weight)

}
//checkIfAnyPokemonWeighsLessThan(pokemon, 18)
/**
 * findByName()
 * -----------------------------
 * Returns a pokemon object from an array of objects based on the name. If the name does not match any pokemon, return `null`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} name - A unique `name`.
 * @returns {Object|null} The pokemon object with the matching `name` or null.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findByName(pokemon, 36);
 *  //> {
      // clefable
    };
 */
function findByName() {}

/**
 * filterByType()
 * -----------------------------
 * Returns all pokemon objects with a matching type. Case-insensitive. If no pokemon match the inputted `genre`, return `[]`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} genre - The type of a pokemon. (e.g. "Fantasy")
 * @returns {Object[]} An array of pokemon where at least one of the types matches the `type` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByType(pokemon, "water");
 *  //> [
      {
        // squirtle
        // wartortle
        // blastoise
      }
    ]
 *
 * EXAMPLE:
 *  filterByType(pokemon, "psychic")
 *  //> []
 */
function filterByType() {}

/**
 * checkMinBaseExperience()
 * -----------------------------
 * Returns either true or false depending whether all pokemon have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {number} baseExperience - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinBaseExperience(pokemon, 90));
 *  //>  false
 */

function checkMinBaseExperience(pokemon, baseExperience) {}


module.exports = {
  getAllPokemonNames,
  checkIfAnyPokemonWeighsLessThan,
  findByName,
  filterByType,
  checkMinBaseExperience,
};
