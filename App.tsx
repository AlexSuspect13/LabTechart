import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import Navigation from './src/navigation';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</Provider>
	);
}
