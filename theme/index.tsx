import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
const theme = {
	Button: {
		raised: true,
	},
};

export default function checkingButton() {
	return (
		<ThemeProvider theme={theme}>
			<Button title="Go To Checking" />
		</ThemeProvider>
	);
}
