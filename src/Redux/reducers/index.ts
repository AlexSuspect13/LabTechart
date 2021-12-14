import { combineReducers } from 'redux';

import userReducer from './UserReducer';

import UserProfileReducer from './UserProfileReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	userProfile: UserProfileReducer,
});
