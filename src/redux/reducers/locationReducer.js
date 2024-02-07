import { ADD_CITY } from '../actions/actionTypes';

export default function locationReducer(
  state = ['New York', 'Chennai', 'Monterrey'],
  action
) {
  switch (action.type) {
    case ADD_CITY:
      // ** Remember **
      // state is immutable in redux, you must create a new
      // array with your updated items, you cannot use push/pop
      // or other array methods that mutate the array
      return [...state, action.city];

    // You should ALWAYS have a default case that returns
    // the state unchanged
    default:
      return state;
  }
}
