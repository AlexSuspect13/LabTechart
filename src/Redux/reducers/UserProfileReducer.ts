export const userProfilestate = {
	name: 'Alex',
};

export default (state = userProfilestate, action: any) => {
	switch (action.type) {
		case 'RENAME_USER':
			return {
				...state,
				name: action.name,
			};
		default:
			return state;
	}
};
