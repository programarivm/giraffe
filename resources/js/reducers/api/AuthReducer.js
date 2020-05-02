import ability from '@/ability';
import abilityRules from '@/../../storage/ability-rules.json';
import ApiAuthActionTypes from '@/constants/api/AuthActionTypes';
import Session from '@/Session';

const initialState = {
  response: [],
  session: {
    role: null
  },
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ApiAuthActionTypes.LOGIN_204:
      ability.update(abilityRules[Session.get().role]);
      return {
        ...state,
        session: Session.get(),
        loading: false
      };
    case ApiAuthActionTypes.LOGIN_401:
      return {
        ...state,
        response: ['The username and password that you entered did not match our records. Please try again.'],
        loading: false
      };
    case ApiAuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        response: ['Whoops! Something went wrong, please try again.'],
        loading: false
      };
    case ApiAuthActionTypes.LOGOUT_204:
      return initialState;
    case ApiAuthActionTypes.LOGOUT_ERROR:
      return {
        ...state,
        response: ['Whoops! Something went wrong, please try again.'],
        loading: false
      };
    default:
      return state;
  }
};
