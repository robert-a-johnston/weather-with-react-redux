import { ADD_CITY } from './actionTypes';
import { REMOVE_CITY } from './actionTypes';



export const addCity = city => ({ type: ADD_CITY, city });

export const removeCity = city => ({ type: REMOVE_CITY, city });
