import axios from 'axios';
import { nice } from '@/actions/api/Validation';

const messages = {
	error: 'Whoops! Sorry there was an error, please try again later.'
};

export default class AbstractCrudActions {
	create(data) {
		return dispatch => {
			dispatch({ type: this.actionTypes.CREATE_LOADING });
			return axios.post(process.env.MIX_APP_URL + this.endpoint, data)
				.then((res) => {
					switch (res.status) {
						case 201:
							dispatch({ type: this.actionTypes.CREATE_201 });
							break;
					}
					return res;
				})
				.catch(error => {
					dispatch({ type: this.actionTypes.CREATE_ERROR, data: nice(error.response.data.errors) });
					return {
						status: error.response.status,
						errors: nice(error.response.data.errors)
					};
				});
    	}
	}

	delete(id) {
		return dispatch => {
			dispatch({ type: this.actionTypes.DELETE_LOADING });
			return axios.delete(process.env.MIX_APP_URL + this.endpoint + `/${id}`)
				.then((res) => {
					switch (res.status) {
						case 204:
							dispatch({ type: this.actionTypes.DELETE_204 });
							break;
					}
					return res;
				})
				.catch(error => {
					dispatch({ type: this.actionTypes.DELETE_ERROR, data: [messages.error] });
					return {
						status: error.response.status,
						errors: [messages.error]
					};
				});
		}
	}

	fetchAll() {
		return dispatch => {
			dispatch({ type: this.actionTypes.FETCH_ALL_LOADING });
			return axios.get(this.endpoint)
				.then((res) => {
					switch (res.status) {
						case 200:
							dispatch({ type: this.actionTypes.FETCH_ALL_200, data: res.data });
							break;
					}
					return res;
				})
				.catch(error => {
					dispatch({ type: this.actionTypes.FETCH_ALL_ERROR, data: [messages.error] });
					return {
						status: error.response.status,
						errors: [messages.error]
					};
				});
			}
	}

	show(id) {
		return dispatch => {
			dispatch({ type: this.actionTypes.SHOW_LOADING });
			return axios.get(process.env.MIX_APP_URL + this.endpoint + `/${id}`)
				.then((res) => {
					switch (res.status) {
						case 200:
							dispatch({ type: this.actionTypes.SHOW_200, data: res.data });
							break;
					}
					return res;
				})
				.catch(error => {
					dispatch({ type: this.actionTypes.SHOW_ERROR, data: [messages.error] });
					return {
						status: error.response.status,
						errors: [messages.error]
					};
				});
			}
	}

	update(id, data) {
		return dispatch => {
			dispatch({ type: this.actionTypes.UPDATE_LOADING });
			return axios.put(process.env.MIX_APP_URL + this.endpoint + `/${id}`, data)
				.then((res) => {
					switch (res.status) {
						case 200:
							dispatch({ type: this.actionTypes.UPDATE_200 });
							break;
					}
					return res;
				})
				.catch(error => {
					dispatch({ type: this.actionTypes.UPDATE_ERROR, data: nice(error.response.data.errors) });
					return {
						status: error.response.status,
						errors: nice(error.response.data.errors)
					};
				});
			}
	}
}
