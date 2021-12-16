export const initialState = {
	isLoading: false,
	userToken: null,
	authError: null,
};

export default (state = initialState, action:any) => {
	switch (action.type) {
		case 'SIGN_IN_FULFILLED':
			return {
				...state,
				userToken: action.token,
				isLoading: false,
			};
		case 'SIGN_IN_REJECTED':
			return {
				...state,
				authError: action.error,
				isLoading: false,
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
				authError: null,
			};
		default:
			return state;
	}
};
