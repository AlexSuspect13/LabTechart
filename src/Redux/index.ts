import { combineReducers } from 'redux';

import AsyncStorage from '@react-native-community/async-storage';

import userReducer from './userReducer';
import { persistReducer } from 'redux-persist';

const persisConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const rootReducer = combineReducers({
	user: userReducer,
});

export default persistReducer(persisConfig, rootReducer);
