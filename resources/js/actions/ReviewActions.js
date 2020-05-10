import axios from 'axios';
import ReviewActionTypes from '@/constants/ReviewActionTypes';

const messages = {
	error: 'Whoops! Sorry there was an error, please try again later.'
};

class ReviewActions {
	click() {
		return dispatch => {
			return axios.get(process.env.MIX_APP_URL + '/api/restaurants')
				.then((res) => {
					switch (res.status) {
						case 200:
							dispatch({ type: ReviewActionTypes.CLICK_OK, restaurants: res.data });
							break;
						default:
							dispatch({ type: ReviewActionTypes.CLICK_ERROR, messages: [messages.error] });
							break;
					}
					return res;
				});
		}
	}
}

export default new ReviewActions();
