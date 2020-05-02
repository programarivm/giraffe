import ApiAuthReducer from '@/reducers/api/AuthReducer';
import ApiRestaurantCreateReducer from '@/reducers/api/RestaurantCreateReducer';
import ApiRestaurantFetchAllReducer from '@/reducers/api/RestaurantFetchAllReducer';
import ApiRestaurantShowReducer from '@/reducers/api/RestaurantShowReducer';
import ApiRestaurantUpdateReducer from '@/reducers/api/RestaurantUpdateReducer';
import ApiReviewCreateReducer from '@/reducers/api/ReviewCreateReducer';
import ApiReviewFetchAllReducer from '@/reducers/api/ReviewFetchAllReducer';
import ApiUserCreateReducer from '@/reducers/api/UserCreateReducer';
import ApiUserFetchAllReducer from '@/reducers/api/UserFetchAllReducer';
import ApiUserShowReducer from '@/reducers/api/UserShowReducer';
import ApiUserUpdateReducer from '@/reducers/api/UserUpdateReducer';
import ReviewReducer from '@/reducers/ReviewReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  ApiAuthReducer,
  ApiRestaurantCreateReducer,
  ApiRestaurantFetchAllReducer,
  ApiRestaurantShowReducer,
  ApiRestaurantUpdateReducer,
  ApiReviewCreateReducer,
  ApiReviewFetchAllReducer,
  ApiUserCreateReducer,
  ApiUserFetchAllReducer,
  ApiUserShowReducer,
  ApiUserUpdateReducer,
  ReviewReducer
});
