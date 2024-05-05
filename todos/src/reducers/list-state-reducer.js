export const initialListState = {
	search: '',
	sort: false,
};

export const listStateReducer = (state = initialListState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SEARCH_TODOS':
			return {
				...state,
				search: payload,
			};
		case 'SORT_TODOS':
			return {
				...state,
				sort: !state.sort,
			};
		default:
			return state;
	}
};
