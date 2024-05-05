import { removeTodoRequest } from '../utils/remove-todo-request';

export const removeTodo = (id) => (dispatch) =>
	removeTodoRequest(id).then(() => dispatch({ type: 'REMOVE_TODO', payload: id }));
