import CrudReducer from 'reducers/api/CrudReducer';
import RestaurantState from 'states/RestaurantState';

const initialState = Object.assign({}, RestaurantState.initial(), {
  response: [],
  loading: false
});

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).create(state, action);
};
