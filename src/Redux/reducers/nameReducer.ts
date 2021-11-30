export const nameState = {
	user: 'admin'
};

export default (state = nameState, action) => {
	switch (action.type) {
		case 'SIGN_IN_PENDING':
			return {
				...state,
				user: action.name,
			};
		default:
			return state;
	}
};
