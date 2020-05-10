import ApiAuthActionTypes from '@/constants/api/AuthActionTypes';
import axios from 'axios';
import { nice } from '@/actions/api/Validation';

class AuthActions {
	constructor() {
		this.endpoint = '/api/auth';
		this.actionTypes = ApiAuthActionTypes;
	}

	login(credentials) {
		return dispatch => {
			return axios.post(this.endpoint + '/login',credentials)
				.then((res) => {
					switch (res.status) {
						case 204:
							dispatch({ type: this.actionTypes.LOGIN_204 });
							break;
					}
					return res;
				})
				.catch(error => {
					switch (error.response.status) {
						case 401:
							dispatch({ type: this.actionTypes.LOGIN_401 });
							break;
						default:
							dispatch({ type: this.actionTypes.LOGIN_ERROR });
							break;
					}
				});
		}
	}

	logout() {
		return dispatch => {
			return axios.post(process.env.MIX_APP_URL + this.endpoint + '/logout')
				.then((res) => {
					switch (res.status) {
						case 204:
							dispatch({ type: this.actionTypes.LOGOUT_204 });
							break;
					}
					return res;
				})
				.catch(error => {
					switch (error.response.status) {
						case 401:
							dispatch({ type: this.actionTypes.LOGOUT_401 });
							break;
						default:
							dispatch({ type: this.actionTypes.LOGOUT_ERROR });
							break;
					}
				});
		}
	}
}

export default new AuthActions();
