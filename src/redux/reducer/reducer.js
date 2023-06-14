import {
  ALL_POKEMONS,
/*   SEARCH_POKEMONS,
  DETAIL_POKEMON,
  CREATE_POKEMON,
  ALL_TYPES,
  FILTER_ORIGIN,
  ORDER_BY_ATTACK,
  ORDER_BY_ALPHABETIC, */
} from "../actions-types/actionsTypes";

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
    default:
      return state;
  }
};

export default pokemonsReducer