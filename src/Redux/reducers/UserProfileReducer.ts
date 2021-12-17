export const userProfilestate = {
	fullName: 'Alex Suspect',
	Userbirthday: '24.10.1991',
};

export default (state = userProfilestate, action) => {
	switch (action.type) {
		case 'RENAME_USER':
			return {
				...state,
				fullName: action.Username,
			};
		case 'BIRTHDAY':
			return {
				...state,
				Userbirthday: action.birthday,
			};
		default:
			return state;
	}
};
