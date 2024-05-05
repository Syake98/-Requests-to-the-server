export const todosReducer = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODOS':
			return payload;

		case 'ADD_TODO':
			return [...state, payload];
		case 'EDIT_TODO':
			return state.with(
				state.findIndex((todo) => todo.id === payload.id),
				payload,
			);
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== payload);
		default:
			return state;
	}
};
