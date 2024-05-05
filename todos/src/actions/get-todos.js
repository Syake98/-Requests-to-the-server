import { getTodosRequest } from '../utils/get-todos-request';

export const getTodos = (setIsLoading, searchTodos, sortedTodos) => (dispatch) => {
	getTodosRequest(setIsLoading).then((data) => {
		if (searchTodos)
			data = data.filter(({ title }) => title.toLowerCase().match(searchTodos));
		if (sortedTodos) data.sort((a, b) => a.title.localeCompare(b.title));
		return dispatch({ type: 'GET_TODOS', payload: data });
	});
};
