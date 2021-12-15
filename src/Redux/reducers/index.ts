import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

import UserProfileReducer from './UserProfileReducer';

export const rootReducer = combineReducers({
	user: UserReducer,
	userProfile: UserProfileReducer,
});
