import CrudReducer from 'reducers/api/CrudReducer';
import ReviewState from 'states/ReviewState';

const initialState = Object.assign({}, ReviewState.initial(), {
  response: [],
  loading: false
});

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).create(state, action);
};
