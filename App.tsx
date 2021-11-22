import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/Redux/reducers/store';
import Navigation from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Navigation />
				</PersistGate>
			</Provider>
		</NavigationContainer>
	);
}
