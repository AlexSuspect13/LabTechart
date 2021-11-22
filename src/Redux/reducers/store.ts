import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import { rootReducer } from '.';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/lib/persistReducer';
const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export const persisConfig = {
	key: 'root',
	storage: AsyncStorage,
};

persistReducer(persisConfig, rootReducer);
