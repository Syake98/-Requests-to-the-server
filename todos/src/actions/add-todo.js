import { addTodoRequest } from '../utils/add-todo-request';

export const addTodo = (newTodo) => (dispatch) =>
	addTodoRequest(newTodo).then((data) => dispatch({ type: 'ADD_TODO', payload: data }));
