import { editTodoRequest } from '../utils';

export const editTodo = (id, editTodo) => (dispatch) =>
	editTodoRequest(id, editTodo).then((data) =>
		dispatch({ type: 'EDIT_TODO', payload: data }),
	);
