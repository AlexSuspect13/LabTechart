import { combineReducers } from 'redux';

import userReducer from './userReducer';

import nameReducer from './nameReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	userName: nameReducer,
});
