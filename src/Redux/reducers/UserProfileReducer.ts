export const userProfilestate = {
	fullName: null,
	birthday: null,
	image: '/Users/aliaksei/Desktop/app/LabTechart/assets/img/standartProfilePhoto.png',
};
export default (state = userProfilestate, action) => {
	switch (action.type) {
		case 'SET_FULLNAME':
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
