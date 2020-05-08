import ApiCrudActionTypes from 'constants/api/CrudActionTypes';

export default class CrudReducer {
  constructor(initialState) {
    this.initialState = initialState;
  }

  create(state, action) {
    switch (action.type) {
      case ApiCrudActionTypes.CREATE_LOADING:
        return {
          loading: true
        };
      case ApiCrudActionTypes.CREATE_201:
        return {
          response: [],
          loading: false
        };
      case ApiCrudActionTypes.CREATE_ERROR:
        return {
          response: action.data,
          loading: false
        };
      default:
        return state;
    }
  }

  fetchAll(state, action) {
    switch (action.type) {
      case ApiCrudActionTypes.FETCH_ALL_LOADING:
        return {
          loading: true
        };
      case ApiCrudActionTypes.FETCH_ALL_200:
        return {
          data: action.data,
          loading: false
        };
      default:
        return state;
    }
  }

  show(state, action) {
    switch (action.type) {
      case ApiCrudActionTypes.SHOW_LOADING:
        return {
          loading: true
        };
      case ApiCrudActionTypes.SHOW_200:
        return {
          record: action.data,
          loading: false
        };
      case ApiCrudActionTypes.SHOW_ERROR:
        return {
          response: action.data,
          loading: false
        };
      default:
        return state;
    }
  }

  update(state, action) {
    switch (action.type) {
      case ApiCrudActionTypes.UPDATE_LOADING:
        return {
          ...state,
          loading: true
        };
      case ApiCrudActionTypes.UPDATE_200:
        return {
          ...this.initialState,
          loading: false
        };
      case ApiCrudActionTypes.UPDATE_ERROR:
        return {
          ...state,
          response: action.data,
          loading: false
        };
      default:
        return state;
    }
  }
}
