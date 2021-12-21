export const userProfilestate = {
	fullName: null,
	birthday: null,
	image: null,
};
export default (state = userProfilestate, action) => {
	switch (action.type) {
		case 'SET_RENAME':
			return {
				...state,
				fullName: action.name,
			};
		case 'SET_BIRTHDAY':
			return {
				...state,
				birthday: action.birthday,
			};
		case 'SET_PHOTO':
			return {
				...state,
				image: action.image,
			};
		default:
			return state;
	}
};
