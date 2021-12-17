export const userProfilestate = {
	name: 'Alex',
	birthday: '24.10.1991',
};

export default (state = userProfilestate, action) => {
	switch (action.type) {
		case 'RENAME_USER':
			return {
				...state,
				name: action.name,
			};
		case 'BIRTHDAY':
			return {
				...state,
				name: action.birthday,
			};
		default:
			return state;
	}
};
