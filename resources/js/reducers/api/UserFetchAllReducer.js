import CrudReducer from '@/reducers/api/CrudReducer';

const initialState = {
  data: [],
  loading: false
};

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).fetchAll(state, action);
};
