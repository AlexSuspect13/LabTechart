export const userProfilestate = {
	fullName: 'Alex Suspect',
	Userbirthday: '24.10.1991',
	UserUriPhoto: 'https://drive.google.com/drive/folders/1731U3zmET8EWuGEAhFBUN1PrHow2g8ma',
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
		case 'URI_USER_PHOTO':
			return {
				...state,
				UserUriPhoto: action.userPhoto,
			};
		default:
			return state;
	}
};
