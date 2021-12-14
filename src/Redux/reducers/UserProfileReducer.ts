export const nameState = {
	name: 'Alex',
};

export default (state = nameState, action: any) => {
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
