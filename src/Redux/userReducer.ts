const initialState = {
	isLoading: true,
	userToken: null,
	authError: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				...state,
				userToken: action.token,
			};
		case 'SIGN_IN_FAILED':
			return {
				...state,
				authError: action.error,
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
