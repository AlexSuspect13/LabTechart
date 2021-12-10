export const nameState = {
	user: 'Alex'
};

export default (state = nameState, action:any) => {
	switch (action.type) {
		case 'RENAME_USER':
			return {
				...state,
				user: action.name,
			};
		default:
			return state;
	}
};
