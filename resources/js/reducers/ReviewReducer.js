import ReviewActionTypes from '@/constants/ReviewActionTypes';
import ReviewState from '@/states/ReviewState';

const initialState = Object.assign({}, ReviewState.initial(), {
  response: [],
  loading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ReviewActionTypes.CLICK_OK:
      let obj = {
        ...initialState,
        restaurants: action.restaurants,
        modal: {
          open: true
        }
      };
      obj.record.restaurant.id = action.restaurants[0].id;
      obj.record.points = [3];
      return obj;
    case ReviewActionTypes.CLICK_ERROR:
      return {
        ...state,
        response: action.messages,
        modal: {
          open: true
        }
      };
    default:
      return state;
  }
};
