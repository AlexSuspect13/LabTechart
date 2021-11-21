const initialState = {
	isLoading: false,
	userToken: null,
	authError: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN_FULFILLED':
			return {
				...state,
				userToken: action.token,
			};
		case 'SIGN_IN_REJECTED':
			return {
				...state,
				authError: action.error,
			};
		case 'SIGN_OUT':
			return {
				...state,
				userToken: null,
			};
		case 'SIGN_IN_PENDING':
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};
