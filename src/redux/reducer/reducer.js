import {
  ALL_POKEMONS,
  SEARCH_POKEMONS,
  DETAIL_POKEMON,
  CREATE_POKEMON,
  DELETE_POKEMON,
  ALL_TYPES,
  FILTER_ORIGIN,
  FILTER_TYPE,
  ORDER_BY_ATTACK,
  ORDER_BY_ALPHABETIC,
} from "../actions-types/actionsTypes.js";

const initialState = {
  pokemons: [],
  allPokemons: [],
  detailPokemons: [],
  types: [],
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case DETAIL_POKEMON:
      return {
        ...state,
        detailPokemons: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
      };
    case DELETE_POKEMON:
      return {
        ...state,
      };
    case ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_ORIGIN:
      const pokemonsAll = state.allPokemons;
      const pokemonsDB = pokemonsAll.filter((pokemon) =>
        pokemon.id.toString().includes("-")
      );

      const pokemonsAPI = pokemonsAll.filter(
        (pokemon) => typeof pokemon.id === "number"
      );

      let filteredPokemons;

      if (action.payload === "DB") {
        if (pokemonsDB.length === 0) {
          window.alert("No hay pokemones en la Base de Datos");
          return state; // No hay necesidad de continuar con la actualización del estado
        }
        filteredPokemons = pokemonsDB;
      } else if (action.payload === "Api") {
        filteredPokemons = pokemonsAPI;
      } else {
        filteredPokemons = pokemonsAll;
      }

      return {
        ...state,
        pokemons: filteredPokemons,
      };

    case FILTER_TYPE:
      const types = state.allPokemons;
      let filterTypes =
        action.payload === "All"
          ? types
          : types.filter((type) =>
              type.type.includes(
                action.payload.charAt(0).toUpperCase() + action.payload.slice(1)
              )
            );
      return {
        ...state,
        pokemons: filterTypes,
      };
    case ORDER_BY_ATTACK:
      const sortedPokemons = [...state.pokemons];
      sortedPokemons.sort((a, b) => {
        if (action.payload === "Descending") {
          return b.attack - a.attack; // Ordenar de mayor a menor (descendente)
        } else {
          return a.attack - b.attack; // Ordenar de menor a mayor (ascendente)
        }
      });
      return {
        ...state,
        pokemons: sortedPokemons,
      };
    case ORDER_BY_ALPHABETIC:
      const pokemonsOrdered = [...state.pokemons];
      pokemonsOrdered.sort((a, b) => {
        if (action.payload === "A to Z") {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        } else if (action.payload === "Z to A"){
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }
      });
      return {
        ...state,
        pokemons: pokemonsOrdered,
      };

    default:
      return state;
  }
};

export default pokemonsReducer;
