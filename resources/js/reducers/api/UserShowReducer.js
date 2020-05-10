import CrudReducer from '@/reducers/api/CrudReducer';
import UserState from '@/states/UserState';

const initialState = Object.assign({}, UserState.initial(), {
  loading: false
});

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).show(state, action);
};
