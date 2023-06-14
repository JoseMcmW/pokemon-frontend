import axios from "axios"
import {
	ALL_POKEMONS,
/* 	SEARCH_POKEMONS,
	DETAIL_POKEMON,
	CREATE_POKEMON,
	ALL_TYPES,
	FILTER_ORIGIN,
	ORDER_BY_ATTACK,
	ORDER_BY_ALPHABETIC */
} from "../actions-types/actionsTypes";

const URL_BASE = "http://localhost:3001/pokemons/";

export const allPokemons = () => {
	return async function (dispatch) {
		try {
			const pokemons = await axios.get(URL_BASE)
			return dispatch({type: ALL_POKEMONS, payload: pokemons.data})
		} catch (error) {
			throw error;
		}
	}
}