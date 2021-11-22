import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/lib/persistReducer';

export const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
