import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { persistor, store } from './src/Redux/store';
import Navigation from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
	Button: {
		backgroundColor: '#ff1493',
		color: 'white',
	},
};

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Navigation />
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</NavigationContainer>
	);
}
