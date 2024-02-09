import { ADD_CITY } from './actionTypes';

// This is an action creator that dispatches an
// ADD_CITY action to the reducer with 'city' as
// the payload.
//
// In the reducer we'll update the store to include
// the new city.
export const addCity = city => ({ type: ADD_CITY, city });
