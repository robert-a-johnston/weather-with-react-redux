import { ADD_CITY, REMOVE_CITY } from '../actions/actionTypes';


export default function locationReducer(
  state = ['New York', 'Chennai', 'Monterrey'],
  action
) {
  switch (action.type) {
    case ADD_CITY:
      console.log(action.city);
      return [...state, action.city];

    case REMOVE_CITY:
      console.log(action.city);
      return state.filter(city => city !== action.city);

    default:
      return state;
   
  }
}
