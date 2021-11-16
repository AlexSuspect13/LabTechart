const initialState = {
	isLoading: true,
	userToken: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				...state,
				userToken: action.token,
			};
		case 'SIGN_OUT':
			return {
				...state,
				userToken: null,
			};
		default:
			return state;
	}
};