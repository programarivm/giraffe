import CrudReducer from '@/reducers/api/CrudReducer';
import RestaurantState from '@/states/RestaurantState';

const initialState = Object.assign({}, RestaurantState.initial(), {
  loading: false
});

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).show(state, action);
};
