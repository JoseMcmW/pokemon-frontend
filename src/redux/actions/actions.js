import axios from "axios";
import {
  ALL_POKEMONS,
  SEARCH_POKEMONS,
  DETAIL_POKEMON,
/*   CREATE_POKEMON,
  DELETE_POKEMON, */
  ALL_TYPES,
  FILTER_ORIGIN,
  FILTER_TYPE,
  ORDER_BY_ATTACK,
  ORDER_BY_ALPHABETIC,
} from "../actions-types/actionsTypes";

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const pokemons = await axios.get("https://pokemon-backend-production-960e.up.railway.app/pokemons");
      return dispatch({ type: ALL_POKEMONS, payload: pokemons.data });
    } catch (error) {
      throw error;
    }
  };
};

export const searchPokemons = (name) => {
  return async function (dispatch) {
    try {
      const search = await axios.get(
        `https://pokemon-backend-production-960e.up.railway.app/pokemons/name?name=${name}`
      );
      return dispatch({ type: SEARCH_POKEMONS, payload: search.data });
    } catch (error) {
      throw error;
    }
  };
};

export const detailPokemon = (id) => {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`https://pokemon-backend-production-960e.up.railway.app/pokemons/${id}`);
      return dispatch({ type: DETAIL_POKEMON, payload: detail.data });
    } catch (error) {
      throw error;
    }
  };
};

export const createPokemon = (body) => {
  return async function () {
    try {
      const create = await axios.post(`https://pokemon-backend-production-960e.up.railway.app/pokemons/`, body);
      return create;
    } catch (error) {
      throw error;
    }
  };
};

export const deletePokemon = (id) => {
  return async function () {
    try {
      const deletePokemon = await axios.delete(`https://pokemon-backend-production-960e.up.railway.app/pokemons/${id}`);
      return deletePokemon;
    } catch (error) {
      throw error;
    }
  };
};

export const typesPokemon = () => {
  return async function (dispatch) {
    try {
      const types = await axios.get(`https://pokemon-backend-production-960e.up.railway.app/types`);
      return dispatch({ type: ALL_TYPES, payload: types.data });
    } catch (error) {
      throw error;
    }
  };
};

export const filterOrigin = (payload) => {
  return {
    type: FILTER_ORIGIN,
    payload,
  };
};

export const filterType = (payload) => {
  return {
    type: FILTER_TYPE,
    payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};

export const orderAlphabetic = (payload) => {
  return {
    type: ORDER_BY_ALPHABETIC,
    payload,
  };
};
