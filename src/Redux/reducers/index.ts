import { combineReducers } from 'redux';

import userReducer from './userReducer';

import UserProfilReducer from './UserProfileReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	userName: UserProfilReducer,
});
